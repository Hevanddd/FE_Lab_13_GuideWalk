import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MyAndSavedRouteItemComponent } from '../../ui/my-and-saved-route-item-component';
import './saved-route.scss';

export const SavedRoutesComponent = ({
  userSavedRoutesData,
  userRoutesData,
  userInfoDate,
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
}) => {
  const userId = userInfoDate && userInfoDate.id;

  useEffect(() => {
    userId && getUserSavedRoutesDataStart(userId);
  }, [userId, getUserSavedRoutesDataStart]);

  return (
    <div className={classNames('saved-route__wrapper')}>
      {userSavedRoutesData &&
        userSavedRoutesData.map((route) => {
          const { rating, name, _id, userRateIds } = route;

          return (
            <MyAndSavedRouteItemComponent
              name={name}
              counter={rating}
              routeId={_id}
              userId={userId && userId}
              toggleRatingFunc={toggleRatingStart}
              toggleSavedRouteStart={toggleSavedRouteStart}
              userRateIds={userRateIds}
              getUserSavedRoutesDataStart={getUserSavedRoutesDataStart}
              key={_id}
            />
          );
        })}
    </div>
  );
};
