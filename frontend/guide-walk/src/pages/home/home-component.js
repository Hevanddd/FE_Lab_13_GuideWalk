import React, { useEffect, useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';
import { getAddedRouteDataStart } from '../../core/redux/actions';

export const HomeComponent = ({
  getUserInfoDataStart,
  userDataAuth,
  userInfoData,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getCoordinatesStart,
  allRoutes,
}) => {
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
  const handleGetCoordinates = () => {
    const routesId = allRoutes && allRoutes[0]._id;
    console.log(routesId);
    routesId && getCoordinatesStart(routesId);
  };

  useEffect(() => {
    getAllRoutesStart();
  }, []);

  return (
    <div>
      {userName && <button onClick={handleGetUserData}>Get user data</button>}
      {owner && <button onClick={handleAddedRouteData}>Add route to server</button>}
      <button onClick={handleGetCoordinates}>Get coordinates of the route</button>
      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
