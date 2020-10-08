import React, { useState, useEffect } from 'react';
import background1 from './backgrounds/background1.png';
import background2 from './backgrounds/background2.png';

import fire from './fire';
import firebase from 'firebase';

export const LoginForm = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        // var user = result.user;
        // console.log(user);
        // ...
      })
      .catch(function (error) {
        console.log(error);
      });

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user.displayName);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user.displayName);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <div className="w-full flex h-screen relative items-center justify-center ">
      <div
        className="z-10 w-full absolute min-h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
      ></div>
      <div
        className="h-full w-1/2 bg-no-repeat bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url(${background1})`
        }}
      ></div>
      <div
        className="h-full w-1/2 bg-no-repeat bg-cover bg-c100_op-10 z-0"
        style={{
          backgroundImage: `url(${background2})`
        }}
      ></div>
      <div className=" w-10/12 h-64 lg:w-lg lg:h-lg bg-white absolute z-30 rounded-xlg flex pt-24 ">
        <div className="h-full mx-auto ">
          <h1 className="font-xbold text-xxlg ">Cherrime</h1>
          <button
            className="font-secondary font-bold text-base text-center bg-c200  text-white py-4 px-40 mt-32 rounded-lg"
            onClick={login}
          >
            Login with email
          </button>
        </div>
      </div>
    </div>
  );
};
