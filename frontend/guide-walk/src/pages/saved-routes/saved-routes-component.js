import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MyAndSavedRouteItemComponent } from '../../ui/my-and-saved-route-item-component';
import './saved-route.scss';

export const SavedRoutesComponent = ({
  userSavedRoutes,
  userRoutesData,
  userInfoDate,
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
  toggleRatingStart,
}) => {
  const userId = userInfoDate && userInfoDate.id;

  useEffect(() => {
    userId && getUserSavedRoutesDataStart(userId);
  }, [userId]);
  return (
    <div className={classNames('saved-route__wrapper')}>
      {userSavedRoutes &&
        userSavedRoutes.map((route) => {
          const { rating, name, _id } = route;

          return (
            <MyAndSavedRouteItemComponent
              name={name}
              counter={rating}
              routeId={_id}
              userId={userId && userId}
              toggleRatingFunc={toggleRatingStart}
              key={_id}
            />
          );
        })}
    </div>
  );
};
