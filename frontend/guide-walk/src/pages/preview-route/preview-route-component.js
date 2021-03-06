import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { formatDate } from './helpers';
import { MapDrawComponent } from '../../ui/map-draw';

import styles from './preview.module.scss';

const PreviewRouteComponent = ({
  getAllRouteDataStart,
  routeData,
  setCurrentRoute,
  currentRoute,
  userInfoDate,
  removeRouteStart,
  userAuthData,
}) => {
  const history = useHistory();
  const routeId = history.location.search.replace(/\?/, '');
  const [isUserOwner, setIsUserOwner] = useState(false);
  const [isStartedRoute, setIsStartedRoute] = useState(false);
  const [route, setRoute] = useState(false);

  const deleteRoute = () => {
    removeRouteStart({ result: { userId: userInfoDate.id, routeId }, history });
  };

  const startRoute = () => {
    setCurrentRoute(routeId);
    history.push('/current-route');
  };

  const editRoute = () => {
    const url = routeId && `/edit-route?${routeId}`;
    history.push(url);
  };

  const { name, description, rating, creation_date, ownerName } = route && route.route;
  const userName = userAuthData && userAuthData.userName;
  const date = formatDate(creation_date);
  const { points } = route;
  const firstPoint = points && points[0].location;
  const lastPoint = points && points[points.length - 1].location;

  const validationIsUserIsOwner = () => {
    userName && ownerName && userName === ownerName && setIsUserOwner(true);
  };

  const errorMessage = <p styleName='preview__error'>Firstly, you should finish your started route.</p>;

  useEffect(() => {
    getAllRouteDataStart(routeId);
  }, [getAllRouteDataStart, routeId]);

  useEffect(() => {
    routeData && setRoute(routeData);
    validationIsUserIsOwner();
    currentRoute && currentRoute === routeId && setIsStartedRoute(true);
    //eslint-disable-next-line
  }, [routeData, currentRoute, userName, ownerName, routeId]);

  return (
    <>
      {route && (
        <>
          <div styleName='preview'>
            <p styleName='preview__name'>{name}</p>
            <p styleName='preview__description'>{description}</p>

            {currentRoute && errorMessage}
            <div styleName='preview__buttons'>
              {isUserOwner && (
                <Button
                  styleName='preview__btn'
                  type='button'
                  color='primary'
                  variant='contained'
                  disabled={!!isStartedRoute}
                  onClick={editRoute}
                >
                  Edit
                </Button>
              )}
              <Button
                styleName='preview__btn'
                type='button'
                color='primary'
                variant='contained'
                disabled={!!currentRoute}
                onClick={startRoute}
              >
                Start
              </Button>
              {isUserOwner && (
                <Button
                  styleName='preview__btn'
                  type='button'
                  color='primary'
                  variant='contained'
                  disabled={!!isStartedRoute}
                  onClick={deleteRoute}
                >
                  Delete
                </Button>
              )}
            </div>
            <div styleName='preview__wrapper'>
              <div>
                <p>Author</p>
                <span>{ownerName}</span>
              </div>
              <div>
                <p>Rating</p>
                <span styleName='preview__rating'>{rating}</span>
              </div>
              <div>
                <p>Date</p>
                <span>{date}</span>
              </div>
            </div>
          </div>
          <div styleName='preview__map'>
            <MapDrawComponent styleName='map' firstPoint={firstPoint} lastPoint={lastPoint} zoom={13} />
          </div>
        </>
      )}
    </>
  );
};

export default CSSModules(PreviewRouteComponent, styles);
