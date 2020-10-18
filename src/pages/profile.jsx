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
    <div className="h-screen bg-c800 ">
      <div className="nav__container flex justify-around items-end">
        <figure className="mt-12 p-4  flex items-end">
          <img
            src={user.photoURL}
            alt="profile"
            className="w-24 h-24 rounded-full border-white border-2 border-solid mr-3 "
          />
          <h1 className="text-xlg font-bold  ">{user.displayName}</h1>
        </figure>
        <button
          className="p-5 text-c400 bg-white rounded-sm justify-self-end"
          onClick={logoutUser}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
