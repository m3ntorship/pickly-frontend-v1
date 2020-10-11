import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
  const history = useHistory();

  const user = useContext(UserContext);
  console.log(user);
  if (!user) {
    history.push('/login');
  }

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push('/login');
      });
  };

  return (
    <div className="h-screen bg-c800">
      <h1>Hello, This is the home page</h1>
      <button
        className="p-5 text-c400 bg-white rounded-sm"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};
