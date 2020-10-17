import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          console.log('From True');
          return <Component {...props} />;
        } else {
          console.log('From False');
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
