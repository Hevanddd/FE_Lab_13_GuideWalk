import React, { useEffect } from 'react';
import classNames from 'classnames';
import { MyAndSavedRouteItemComponent } from '../../ui';
import './saved-route.scss';

export const SavedRoutesComponent = ({
  userSavedRoutesData,
  userInfoDate,
  getUserSavedRoutesDataStart,
  userSavedRoadsIdList,
  getToggleSavedRouteInSavedRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageStart,
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
              userRateIds={userRateIds}
              getUserSavedRoutesDataStart={getUserSavedRoutesDataStart}
              userSavedRoadsIdList={userSavedRoadsIdList}
              getToggleSavedRouteInSavedRoutesPageStart={getToggleSavedRouteInSavedRoutesPageStart}
              getToggleRatingRouteInSavedRoutesPageStart={getToggleRatingRouteInSavedRoutesPageStart}
              key={_id}
            />
          );
        })}
      {!userSavedRoutesData && <div className={classNames('saved-route__empty')}>You have not saved any routes</div>}
    </div>
  );
};
