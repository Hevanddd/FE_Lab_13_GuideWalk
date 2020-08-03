import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const ResourcesProviderComponent = ({ children, refreshUserData }) => {
  const { user } = useAuth0();
  useEffect(() => {
    user && refreshUserData(user);
  });

  return children;
};
