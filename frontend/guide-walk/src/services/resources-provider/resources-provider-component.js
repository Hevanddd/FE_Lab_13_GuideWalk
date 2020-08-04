import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const ResourcesProviderComponent = ({ children, refreshUserData, getHomeUserDataStart }) => {
  const { user } = useAuth0();
  const userName = user && user[`https://username`];
  useEffect(() => {
    user && refreshUserData(user);
    userName && getHomeUserDataStart(userName);
  });

  return children;
};
