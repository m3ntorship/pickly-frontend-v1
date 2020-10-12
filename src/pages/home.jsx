import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const user = useContext(UserContext);

  const history = useHistory();
  if (!user) {
    history.push('/login');
  }

  return (
    <div className="h-screen bg-c800">
      <h1>Hello, This is the home page</h1>
    </div>
  );
};
