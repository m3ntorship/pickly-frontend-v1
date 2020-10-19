import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Route, Redirect } from 'react-router-dom';
import PageLoader from '../components/LoadingComponents/PageLoader';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (loading) {
          return <PageLoader />;
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
