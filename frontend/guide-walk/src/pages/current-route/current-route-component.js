import React, { useState, useEffect } from 'react';
import { MapDirectionsComponent, CurrentRouteInfoBlock } from '../../ui';

export const CurrentRouteComponent = ({
  currentRoute,
  currentPointData,
  getNextPointStart,
  setCurrentRoute,
  setCurrentPoint,
}) => {
  const [markersPositions, setMarkersPositions] = useState();

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
  }, []);

  useEffect(() => {

    if (currentPointData && Object.keys(currentPointData).length !== 0) {
      localStorage.setItem('currentPointData', JSON.stringify({ currentPointData }));
      //on first point state is not defined so we need this check
      if (!markersPositions) {
        setMarkersPositions({
          //TODO: Set start marker to user geolocation in moment of invocation Start Route
          startMarkerPositions: [24.0224041633556, 49.83974574113253],
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
  }, [currentPointData]);

  const handleNextRoute = () => {
    if (currentPointData.pointsLeft) {
      getNextPointStart({ routeId: currentRoute, pointIndex: currentPointData.pointIndex });
    }
    //TODO: Make window to show after route finished
    else {
      alert('You have succesfully finished this route');
      localStorage.clear();
      setCurrentRoute(null);
      setCurrentPoint(null);
      setMarkersPositions(null);
    }
  };

  return (
    <div>
      {!currentRoute && <h1>Choose any route first</h1>}
      {markersPositions && (
        <div>
          <div style={{ position: 'relative', height: '50vh', margin: '30px' }}>
            <MapDirectionsComponent markerPositions={markersPositions} zoom={15}></MapDirectionsComponent>
          </div>
          <CurrentRouteInfoBlock
            currentPointData={currentPointData}
            handleNextRoute={handleNextRoute}
          ></CurrentRouteInfoBlock>
        </div>
      )}
    </div>
  );
};
