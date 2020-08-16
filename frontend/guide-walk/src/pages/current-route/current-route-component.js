import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { MapDirectionsComponent, CurrentRouteInfoBlock, AlertDialog } from '../../ui';
import './current-route.scss';

export const CurrentRouteComponent = ({
  currentRoute,
  currentPointData,
  getNextPointStart,
  setCurrentRoute,
  setCurrentPoint,
  setCurrentRouteMarkersPositions,
  currentRouteMarkersPositions,
}) => {
  const [geolocationPosition, setGeolocationPosition] = useState();
  const [isDisabled, setIsDisable] = useState(true);

  const validationCheckout = () => {
    const finishMarkerPositions = currentRouteMarkersPositions && currentRouteMarkersPositions.finishMarkerPositions;
    const finishLng = finishMarkerPositions && finishMarkerPositions[0].toFixed(3);
    const finishLat = finishMarkerPositions && finishMarkerPositions[1].toFixed(3);
    const geolocationLng = geolocationPosition && geolocationPosition[0].toFixed(3);
    const geolocationLat = geolocationPosition && geolocationPosition[1].toFixed(3);

    return geolocationLng === finishLng && geolocationLat === finishLat;
  };
  const finishRoute = () => {
    localStorage.clear();
    setCurrentRoute(null);
    setCurrentPoint(null);
    setCurrentRouteMarkersPositions(null);
  };

  //we need localStorage to get current data after page reloading or closing
  useEffect(() => {
    //if currentRoute is defined by default it means user changed route, so there is no need to get data from localStor
    if (currentRoute) {
      localStorage.setItem('currentRoute', currentRoute);
      !currentRouteMarkersPositions && getNextPointStart({ routeId: currentRoute, pointIndex: 0 });
    }

    if (!currentRoute) {
      const routeIdStorage = localStorage.getItem('currentRoute');

      if (!routeIdStorage) {
        return;
      }

      setCurrentRoute(routeIdStorage);
      const dataFromStor = JSON.parse(localStorage.getItem('currentPointData'));

      //data from storage is not obligatory,
      //if there is no data in storage, but we have route - user closed/reloaded page on first point,
      //so we can send new request for first point
      if (Object.keys(dataFromStor).length !== 0) {
        setCurrentPoint(dataFromStor.currentPointData);
      } else {
        getNextPointStart({ routeId: routeIdStorage, pointIndex: 0 });
      }
    }
    return () => {
      if (currentRouteMarkersPositions && currentRouteMarkersPositions.startMarkerPositions && geolocationPosition) {
        setCurrentRouteMarkersPositions({
          finishMarkerPositions: [currentPointData.location.longitude, currentPointData.location.latitude],
          startMarkerPositions: [geolocationPosition[0], geolocationPosition[1]],
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentPointData && Object.keys(currentPointData).length !== 0) {
      localStorage.setItem('currentPointData', JSON.stringify({ currentPointData }));
      //on first point state is not defined so we need this check
      if (!currentRouteMarkersPositions) {
        setCurrentRouteMarkersPositions({
          startMarkerPositions: null,
          finishMarkerPositions: [currentPointData.location.longitude, currentPointData.location.latitude],
        });
      }
      //on next points we have start marker as previous point and finish marker as next point
      else {
        setCurrentRouteMarkersPositions({
          ...currentRouteMarkersPositions,
          finishMarkerPositions: [currentPointData.location.longitude, currentPointData.location.latitude],
        });
      }
    }

    //eslint-disable-next-line
  }, [currentPointData]);

  useEffect(() => {
    validationCheckout() && setIsDisable(false);
    //eslint-disable-next-line
  }, [geolocationPosition, currentRouteMarkersPositions]);

  const handleNextRoute = () => {
    if (currentPointData.pointsLeft) {
      getNextPointStart({ routeId: currentRoute, pointIndex: currentPointData.pointIndex });
    }
    //TODO: Make window to show after route finished
    else {
      alert('You have successfully finished this route');
      finishRoute();
    }
  };

  const handleCheckoutOnClick = () => {
    if (validationCheckout()) {
      setCurrentRouteMarkersPositions({
        startMarkerPositions: [
          currentRouteMarkersPositions.finishMarkerPositions[0],
          currentRouteMarkersPositions.finishMarkerPositions[1],
        ],
      });
      setIsDisable(true);
      handleNextRoute();
    }
  };

  const handleCancelOnClick = () => finishRoute();
  return (
    <div>
      {!currentRoute && <h1>Choose any route first</h1>}
      {currentRouteMarkersPositions && (
        <div>
          <div className={classNames('map-directions')}>
            <MapDirectionsComponent
              markerPositions={currentRouteMarkersPositions}
              setGeolocationPositionToProps={setGeolocationPosition}
              zoom={15}
            />
          </div>
          <div className={classNames('current-route__wrapper')}>
            <CurrentRouteInfoBlock currentPointData={currentPointData} handleNextRoute={handleNextRoute} />
            <p>To check, you need to enable geolocation</p>
            <div className={classNames('current-route__button')}>
              <Button onClick={handleCheckoutOnClick} color='primary' variant='contained' disabled={isDisabled}>
                Checkout
              </Button>
              <AlertDialog handleCancelOnClick={handleCancelOnClick} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
