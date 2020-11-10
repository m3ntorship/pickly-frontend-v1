import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { PICKLY } from '../apis/clients/pickly';
import { useHistory } from 'react-router-dom';
import { NotificationSection } from '../components/Notifications/index';
export const Notifications = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  });

  // This useEffect() for fetching data when the route load
  useEffect(() => {
    PICKLY.getAllNotifications()
      .then(({ data }) => {
        setData(data.notifications);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  }, [token]);
  useEffect(() => {}, [data]);

  const ErrorComponent = () => {
    return (
      <div
        className="bg-c900 border border-c200 text-c200 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Sorry!</strong>
        <span className="block sm:inline ml-2">Can't find your data.</span>
      </div>
    );
  };

  return (
    <div className="h-screen ">
      <NotificationSection data={data} />
      <div className="nav__container mx-auto">
        {error && <ErrorComponent />}
      </div>
    </div>
  );
};
