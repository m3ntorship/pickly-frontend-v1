import React, { createContext, useState, useEffect } from 'react';
import fire from '../components/LoginForm/fire';

export const UserContext = createContext(null);

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user.displayName + 'from context');
      } else {
        setUser(null);
      }
    });
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
