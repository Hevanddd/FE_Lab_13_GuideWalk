import React, { useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';

<<<<<<< HEAD
export const HomeComponent = () => {
  const { loading, request, error, clearError } = useHttp();
  const { loginWithRedirect, isAuthenticated, logout , user} = useAuth0();
  const handleRequest = async () => {
    try {
      const data = await request('/api/point', 'GET');
      console.log(data);
    } catch (e) {}
=======
export const HomeComponent = ({ getHomeUserDataStart, userData }) => {
  const [testData, setTestData] = useState();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const userName = user && user[`https://username`];
  const testDataRequest = {
    pointArray: [
      {
        title: 'Title',
        location: { lng: 41.4, lat: 10 },
        description: 'Description',
      },
      {
        title: 'Title2',
        location: { lng: 45.4, lat: 45 },
        description: 'Description2',
      },
    ],
    routeInfo: {
      title: 'Title',
      focus: 'Focus',
      description: 'Description',
      owner: testData && testData.id,
    },
>>>>>>> e1605f740c85ff28adc398812b3f2de127695db1
  };
  const handleRequest = () => {
    userData && getHomeUserDataStart(userData);
  };
  const handleRequestNew = () => {};
  const handleRequestGet = () => {};
  return (
    <div>
      <button onClick={handleRequest}>Request</button>
      <button onClick={handleRequestNew}>RequestNew</button>
      <button onClick={handleRequestGet}>RequestGet</button>
      <button onClick={loginWithRedirect}>Login</button>
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
