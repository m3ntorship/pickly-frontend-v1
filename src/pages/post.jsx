import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Post = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <div className="h-screen">
      <div className="container flex  justify-center ">
        <h1 className="text-xxlg font-regular tracking-widest pt-12">Post</h1>
      </div>
    </div>
  );
};
