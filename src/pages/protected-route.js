import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (loading) {
          return 'loading from protected route.. ';
        } else {
          if (user) {
            return <Component {...props} />;
          } else {
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
        }
      }}
    />
  );
};
