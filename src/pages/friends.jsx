import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Friends = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <div className="h-screen bg-c800">
      <h1>Friends</h1>
    </div>
  );
};
