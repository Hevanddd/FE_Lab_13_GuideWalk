import React, { useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';
// import { useHttp } from '../../services/http-hook/http-hook';

export const HomeComponent = () => {
  const [testData, setTestData] = useState();
  // const { request } = useHttp();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const username = user && user.nickname;
  // const handleRequest = async () => {
  //   console.log(user)
  //   try {
  //     const data = await request('/api/user', 'POST', { username });
  //     setTestData(data);
  //   } catch (e) {}
  // };
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
  };
  // const handleRequestNew = async () => {
  //   try {
  //     await request('/api/route/createRoute', 'POST', testDataRequest);
  //   } catch (e) {}
  // };
  // const handleRequestGet = async () => {
  //   try {
  //     await request('/api/route', 'GET');
  //   } catch (e) {}
  // };
  return (
    <div>
      {/* <button onClick={handleRequest}>Request</button>
      <button onClick={handleRequestNew}>RequestNew</button>
      <button onClick={handleRequestGet}>RequestGet</button>
      <button onClick={loginWithRedirect}>Login</button> */}
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
