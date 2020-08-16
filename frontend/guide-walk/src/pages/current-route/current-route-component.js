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
}) => {
  const [markersPositions, setMarkersPositions] = useState();
  const [geolocationPosition, setGeolocationPosition] = useState();
  const finishRoute = () => {
    localStorage.clear();
    setCurrentRoute(null);
    setCurrentPoint(null);
    setMarkersPositions(null);
  };
  console.log(markersPositions);

  //we need localStorage to get current data after page reloading or closing
  useEffect(() => {
    //if currentRoute is defined by default it means user changed route, so there is no need to get data from localStor
    if (currentRoute) {
      localStorage.setItem('currentRoute', currentRoute);
      getNextPointStart({ routeId: currentRoute, pointIndex: 0 });
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
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentPointData && Object.keys(currentPointData).length !== 0) {
      localStorage.setItem('currentPointData', JSON.stringify({ currentPointData }));
      //on first point state is not defined so we need this check
      if (!markersPositions) {
        setMarkersPositions({
          finishMarkerPositions: [currentPointData.location.longitude, currentPointData.location.latitude],
        });
      }
      //on next points we have start marker as previous point and finish marker as next point
      else {
        setMarkersPositions({
          startMarkerPositions: [markersPositions.finishMarkerPositions[0], markersPositions.finishMarkerPositions[1]],
          finishMarkerPositions: [currentPointData.location.longitude, currentPointData.location.latitude],
        });
      }
    }
    return () => {
      if (markersPositions && !markersPositions.startMarkerPositions && geolocationPosition) {
        setMarkersPositions((prevState) => ({
          ...prevState,
          startMarkerPositions: [geolocationPosition[0], geolocationPosition[1]],
        }));
      }
    };
    //eslint-disable-next-line
  }, [currentPointData]);

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
    const { finishMarkerPositions } = markersPositions;
    const finishLng = finishMarkerPositions[0].toFixed(3);
    const finishLat = finishMarkerPositions[1].toFixed(3);
    const geolocationLng = geolocationPosition && geolocationPosition[0].toFixed(3);
    const geolocationLat = geolocationPosition && geolocationPosition[1].toFixed(3);

    if (geolocationLng === finishLng && geolocationLat === finishLat) handleNextRoute();
  };

  const handleCancelOnClick = () => finishRoute();
  return (
    <div>
      {!currentRoute && <h1>Choose any route first</h1>}
      {markersPositions && (
        <div>
          <div className={classNames('map-directions')}>
            <MapDirectionsComponent
              markerPositions={markersPositions}
              setGeolocationPositionToProps={setGeolocationPosition}
              zoom={15}
            />
          </div>
          <div className={classNames('current-route__wrapper')}>
            <CurrentRouteInfoBlock currentPointData={currentPointData} handleNextRoute={handleNextRoute} />
            <p>To check, you need to enable geolocation</p>
            <div className={classNames('current-route__button')}>
              <Button onClick={handleCheckoutOnClick} color='primary' variant='contained'>
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
