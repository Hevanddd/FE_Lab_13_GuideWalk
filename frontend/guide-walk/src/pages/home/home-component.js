import React from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';

export const HomeComponent = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      <button onClick={loginWithRedirect}>Login</button>
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
