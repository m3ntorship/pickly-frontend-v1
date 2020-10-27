import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useHistory } from 'react-router-dom';
import { LoginFormSection } from './LoginFormSection';
export const LoginForm = () => {
  const { loginUser, user } = useContext(UserContext);
  const history = useHistory();
  if (user) {
    history.push('/profile');
    return null;
  } else {
    return <LoginFormSection onSubmit={loginUser} />;
  }
};
