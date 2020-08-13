import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { TopRoutesItemComponent } from '../../ui/top-item-component';
import './top-routes-component.scss';

const TopRoutes = ({
  allRoutes,
  getAllRoutesStart,
  userInfoDate,
  userAuthData,
  userSavedRoadsIdList,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
}) => {
  const userId = userInfoDate && userInfoDate.id;
  const userName = userAuthData && userAuthData.userName;

  useEffect(() => {
    getAllRoutesStart();
  }, []);

  return (
    <div className='top-routes__wrapper'>
      {allRoutes &&
        allRoutes.map((route) => {
          const { name, _id, rating, userRateIds } = route;

          return (
            <TopRoutesItemComponent
              name={name}
              rating={rating}
              routeId={_id}
              key={_id}
              userId={userId}
              userSavedRoadsIdList={userSavedRoadsIdList}
              userRateIds={userRateIds}
              userName={userName}
              getToggleSavedRouteInTopRoutesPageStart={getToggleSavedRouteInTopRoutesPageStart}
              getToggleRatingRouteInTopRoutesPageStart={getToggleRatingRouteInTopRoutesPageStart}
            />
          );
        })}
    </div>
  );
};

export const TopRoutesComponent = withRouter(TopRoutes);
