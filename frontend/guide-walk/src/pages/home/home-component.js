import React, { useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';
import { getAddedRouteDataStart } from '../../core/redux/actions';

export const HomeComponent = ({ getUserInfoDataStart, userDataAuth, routes, userInfoData, getAddedRouteDataStart }) => {
  const [testData, setTestData] = useState();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const userName = userDataAuth && userDataAuth.userName;
  const owner = userInfoData && userInfoData.id;
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
      owner,
    },
  };
  const handleGetUserData = () => {
    userName && getUserInfoDataStart(userName);
  };
  const handleAddedRouteData = () => {
    userInfoData && getAddedRouteDataStart(testDataRequest);
  };
  const handleRequestGet = () => {};
  return (
    <div>
      {userName && <button onClick={handleGetUserData}>Get user data</button>}
      {owner && <button onClick={handleAddedRouteData}>Add route to server</button>}
      <button onClick={handleRequestGet}>RequestGet</button>
      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
