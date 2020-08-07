import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const ResourcesProviderComponent = ({ children, refreshUserDataAuth, getUserInfoDataStart }) => {
  const { user } = useAuth0();
  const userName = user && user[`https://username`];
  useEffect(() => {
    user && refreshUserDataAuth(user);
    userName && getUserInfoDataStart(userName);
  });

  return children;
};
