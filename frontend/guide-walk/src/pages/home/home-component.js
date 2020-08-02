import React from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';
import { useHttp } from '../../services';

export const HomeComponent = () => {
  const { loading, request, error, clearError } = useHttp();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const handleRequest = async () => {
    try {
      const data = await request('/api/point', 'GET');
      console.log(data);
    } catch (e) {}
  };
  return (
    <div>
      <button onClick={handleRequest}>Request</button>
      <button onClick={loginWithRedirect}>Login</button>
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};