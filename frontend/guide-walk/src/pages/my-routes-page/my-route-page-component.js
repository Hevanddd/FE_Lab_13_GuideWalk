import React, { useEffect } from 'react';
import { MyAndSavedRouteItemComponent } from '../../ui';
import classNames from 'classnames';
import './my-route.scss';

export const MyRoutesPageComponent = ({
  userInfoDate,
  getUserRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
  userRoutesData,
  userAuthData,
  userSavedRoadsIdList,
}) => {
  const userId = userInfoDate && userInfoDate.id;
  const userName = userAuthData && userAuthData.userName;

  useEffect(() => {
    userId && getUserRoutesDataStart(userId);
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
              toggleRatingFunc={toggleRatingStart}
              toggleSavedRouteStart={toggleSavedRouteStart}
              userRateIds={userRateIds}
              userSavedRoadsIdList={userSavedRoadsIdList}
              userName={userName}
              key={_id}
            />
          );
        })}
      {!userRoutesData && <div className={classNames('my-routes__empty')}>You have not created any routes</div>}
    </div>
  );
};
