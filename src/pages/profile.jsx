import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
  const { user, token, logoutUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user]);

  return (
    <div className="h-screen bg-c800">
      <h1>Hello, This is the home page</h1>
      <button
        className="p-5 text-c400 bg-white rounded-sm"
        onClick={logoutUser}
      >
        Log Out
      </button>
    </div>
  );
};
