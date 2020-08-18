import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Waypoint } from 'react-waypoint';
import { TopRoutesItemComponent } from '../../ui/top-item-component';
import './top-routes-component.scss';

const TopRoutes = ({
  allRoutes,
  getAllRoutesStart,
  getNextRoutesStart,
  userInfoDate,
  userSavedRoadsIdList,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
  searchData,
}) => {
  const userId = userInfoDate && userInfoDate.id;

  useEffect(() => {
    getAllRoutesStart();
    //eslint-disable-next-line
  }, []);

  const [page, setPage] = useState(0);
  const handleOnEnter = () => {
    const nextPage = page + 1;
    setPage((prevState) => prevState + 1);
    getNextRoutesStart(nextPage);
  };

  return (
    <div className='top-routes__wrapper'>
      {!searchData &&
        allRoutes &&
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
      {searchData &&
        searchData.map((route) => {
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
      {allRoutes && allRoutes.length % 10 === 0 && (
        <Waypoint scrollableAncestor={window} bottomOffset='-200px' onEnter={handleOnEnter} />
      )}
    </div>
  );
};

export const TopRoutesComponent = withRouter(TopRoutes);
