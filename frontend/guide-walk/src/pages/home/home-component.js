import React, { useEffect, useState } from 'react';
import { MapComponent } from '../../ui/map-component/map-component';
import { useAuth0 } from '@auth0/auth0-react';

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
  toggleRatingStart,
  removeRouteStart,
  toggleSavedRouteStart,
}) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const userName = userDataAuth && userDataAuth.userName;
  const owner = userInfoData && userInfoData.id;
  const ownerName = userDataAuth && userDataAuth.userName;
  const routesId = allRoutes && allRoutes[4]._id;
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
  const requestData = {
    routeId: routesId,
    userId: owner,
  };
  const requestData2 = {
    // routeId: routesId,
    userId: owner,
  };

  const handleGetUserData = () => {
    userName && getUserInfoDataStart(userName);
  };
  const handleAddedRouteData = () => {
    userInfoData && getAddedRouteDataStart(testDataRequest);
  };
  const handleGetCoordinates = () => {
    // routesId && getCoordinatesStart(routesId);
  };
  const handleAddSavedRoute = () => {
    // routesId && addSavedRouteStart(requestData);
    routesId && toggleSavedRouteStart({ toggleData: requestData });
    // userName && getUserInfoDataStart(userName);
  };

  const handleAllRouteInfo = () => {
    // routesId && getAllRouteDataStart(routesId);
  };

  const handleRemoveSavedRoute = () => {
    // routesId && removeSavedRouteStart(requestData);
  };

  const handleToggleRating = () => {
    const requestRating = {
      // routeId: routesId,
      userId: owner,
    };
    toggleRatingStart(requestRating);
  };

  const handleRemoveRoute = () => {
    const requestRemoveRoute = {
      // routeId: routesId,
      userId: owner,
    };
    removeRouteStart(requestRemoveRoute);
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
      <button onClick={handleToggleRating}>Toggle rating</button>
      <button onClick={handleRemoveRoute}>Remove route</button>
      {/*{routesId && <button onClick={handleAllRouteInfo}>All route info</button>}*/}
      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Log out</button>}
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
