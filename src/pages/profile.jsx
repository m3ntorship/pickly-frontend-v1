import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  return (
    <div className="h-screen bg-c800 ">
      <div className="nav__container flex justify-center">
        <div className="mt-12 flex">
          <img
            src={user.photoURL}
            alt="profile"
            className="w-24 h-24 rounded-full border-white border-2 border-solid mr-3"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{user.displayName}</h1>
            <button
              className="p-5 text-c400 bg-white rounded-sm"
              onClick={logoutUser}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
