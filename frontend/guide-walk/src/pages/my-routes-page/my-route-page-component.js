import React, { useEffect } from 'react';
import { MyAndSavedRouteItemComponent } from '../../ui';
import classNames from 'classnames';
import './my-route.scss';

export const MyRoutesPageComponent = ({
  userInfoDate,
  getUserRoutesDataStart,
  userRoutesData,
  userSavedRoadsIdList,
  getToggleSavedRouteInMyRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageStart,
}) => {
  const userId = userInfoDate && userInfoDate.id;

  useEffect(() => {
    userId && getUserRoutesDataStart(userId);
    //eslint-disable-next-line
  }, [userId]);

  return (
    <div className={classNames('my-routes__wrapper')}>
      {userRoutesData &&
        userRoutesData.map((route) => {
          const { name, _id, rating, userRateIds } = route;
          return (
            <MyAndSavedRouteItemComponent
              name={name}
              counter={rating}
              routeId={_id}
              userId={userId && userId}
              userRateIds={userRateIds}
              userSavedRoadsIdList={userSavedRoadsIdList}
              getToggleSavedRouteInMyRoutesPageStart={getToggleSavedRouteInMyRoutesPageStart}
              getToggleRatingRouteInMyRoutesPageStart={getToggleRatingRouteInMyRoutesPageStart}
              key={_id}
            />
          );
        })}
      {!userRoutesData && <div className={classNames('my-routes__empty')}>You have not created any routes</div>}
    </div>
  );
};
