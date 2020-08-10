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
  const [isUpdateSaga, setIsUpdateSaga] = useState();

  useEffect(() => {
    userId && getUserSavedRoutesDataStart(userId);
  }, [userId, isUpdateSaga]);

  return (
    <div className={classNames('saved-route__wrapper')}>
      {userSavedRoutesData &&
        userSavedRoutesData.map((route) => {
          const { rating, name, _id } = route;

          return (
            <MyAndSavedRouteItemComponent
              name={name}
              counter={rating}
              routeId={_id}
              userId={userId && userId}
              toggleRatingFunc={toggleRatingStart}
              setIsUpdateSaga={setIsUpdateSaga}
              isUpdateValue={isUpdateSaga}
              toggleSavedRouteStart={toggleSavedRouteStart}
              key={_id}
            />
          );
        })}
    </div>
  );
};
