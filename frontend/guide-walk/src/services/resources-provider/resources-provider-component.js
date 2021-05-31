import React from 'react';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginComponent } from '../../ui';

export const ResourcesProviderComponent = ({ children, refreshUserDataAuth, getUserInfoDataStart }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const userName = user && user.nickname;
  useEffect(() => {
    user && refreshUserDataAuth(user);
    userName && getUserInfoDataStart(userName);
  });

  return isAuthenticated ? children : <LoginComponent loginWithRedirect={loginWithRedirect} />;
};
