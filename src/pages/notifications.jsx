import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';
import { NotificationSection } from '../components/Notifications/index';
export const Notifications = ({ postDate }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <div className=" h-screen ">
      <NotificationSection />
    </div>
  );
};
