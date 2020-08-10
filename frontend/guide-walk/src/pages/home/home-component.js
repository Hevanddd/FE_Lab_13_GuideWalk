import React, { useEffect, useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';
import { getAddedRouteDataStart, getAllRouteDataStart } from '../../core/redux/actions';

export const HomeComponent = ({
  getUserInfoDataStart,
  userDataAuth,
  userInfoData,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getCoordinatesStart,
  allRoutes,
  addSavedRouteStart,
  getAllRouteDataStart,
  removeSavedRouteStart,
}) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const userName = userDataAuth && userDataAuth.userName;
  const owner = userInfoData && userInfoData.id;
  const ownerName = userDataAuth && userDataAuth.userName;
  const routesId = allRoutes && allRoutes[44]._id;
  const testDataRequest = {
    pointArray: [
      {
        title: 'Title',
        location: { longitude: 41.4312, latitude: 10.213 },
        description: 'Description',
      },
      {
        title: 'Title2',
        location: { longitude: 40.42123423, latitude: 45 },
        description: 'Description2',
      },
    ],
    routeInfo: {
      title: 'Title',
      focus: 'Focus',
      description: 'NEW',
      owner,
      ownerName,
    },
  };
  const handleGetUserData = () => {
    userName && getUserInfoDataStart(userName);
  };
  const handleAddedRouteData = () => {
    userInfoData && getAddedRouteDataStart(testDataRequest);
  };
  const handleGetCoordinates = () => {
    routesId && getCoordinatesStart(routesId);
  };
  const handleAddSavedRoute = () => {
    const requestData = {
      savedId: routesId,
      userId: owner,
    };
    routesId && addSavedRouteStart(requestData);
  };

  const handleAllRouteInfo = () => {
    routesId && getAllRouteDataStart(routesId);
  };

  const handleRemoveSavedRoute = () => {
    const requestData = {
      savedId: routesId,
      userId: owner,
    };
    routesId && removeSavedRouteStart(requestData);
  };

  useEffect(() => {
    getAllRoutesStart();
  }, []);

  return (
    <div>
      {userName && <button onClick={handleGetUserData}>Get user data</button>}
      {owner && <button onClick={handleAddedRouteData}>Add route to server</button>}
      <button onClick={handleGetCoordinates}>Get coordinates of the route</button>
      <button onClick={handleAddSavedRoute}>Add saved route</button>
      <button onClick={handleRemoveSavedRoute}>Remove saved route</button>
      {routesId && <button onClick={handleAllRouteInfo}>All route info</button>}
      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
