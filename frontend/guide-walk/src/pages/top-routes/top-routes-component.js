import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { TopRoutesItemComponent } from '../../ui/top-item-component';
import './top-routes-component.scss';

const TopRoutes = ({
  allRoutes,
  getAllRoutesStart,
  history,
  userInfoDate,
  userSavedRoadsIdList,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
}) => {
  const userId = userInfoDate && userInfoDate.id;

  const handleMyRoutesButton = () => {
    const url = '/my-routes';
    history.push(url);
  };

  useEffect(() => {
    getAllRoutesStart();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='top-routes__wrapper'>
      <button onClick={handleMyRoutesButton}>My routes</button>
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
              getToggleSavedRouteInTopRoutesPageStart={getToggleSavedRouteInTopRoutesPageStart}
              getToggleRatingRouteInTopRoutesPageStart={getToggleRatingRouteInTopRoutesPageStart}
            />
          );
        })}
    </div>
  );
};

export const TopRoutesComponent = withRouter(TopRoutes);
