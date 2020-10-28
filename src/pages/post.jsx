import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import { UploadSection } from '../components/UploadSection';

export const Post = ({ postDate }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <div className="h-full container ">
      <div className="grid grid-cols-1 ">
        <UploadSection userImage={user.photoURL} />
      </div>
    </div>
  );
};
