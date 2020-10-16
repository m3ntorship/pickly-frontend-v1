import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fire from '../components/LoginForm/fire';
import firebase from 'firebase';

export const UserContext = createContext(null);

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();
  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        user.getIdToken().then(token => {
          setToken(token);
        });
      } else {
        setUser(null);
        history.push('/login');
      }
    });
  }, [user]);

  const loginUser = e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        history.push('/');
        setUser(result.user);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push('/login');
      });
  };

  return (
    <UserContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
