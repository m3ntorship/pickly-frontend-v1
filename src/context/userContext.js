import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fire from '../components/LoginForm/fire';
import firebase from 'firebase';

export const UserContext = createContext(null);

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  // The problem : it passes the user by null value before check it

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(token => {
          setUser(user);
          setToken(token);
          setLoading(false);
        });
      } else {
        setLoading(false);
        setUser(null);
        history.push('/login');
      }
    });
  }, [history]);

  const loginUser = e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        // wait for `onAuthStateChanged` to fire
        // and sets the user and then redirect
        // to the homepage
        setTimeout(() => history.push('/'));
      })
      .catch(console.error);
  };

  const logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push('/login');
      });
  };

  const contextValue = {
    loading,
    user,
    token,
    logoutUser,
    loginUser
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
