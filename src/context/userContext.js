import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fire from '../components/LoginForm/fire';
import firebase from 'firebase';

export const UserContext = createContext(null);

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const history = useHistory();

  // The problem : it passes the user by null value before check it

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

  console.log(user);
  return (
    <UserContext.Provider value={{ user, token, logoutUser, loginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
