import React, { useState, useEffect } from 'react';
import { MapDirectionsComponent, CurrentRouteInfoBlock } from '../../ui';

export const CurrentRouteComponent = ({
  currentRoute,
  currentPointIndex,
  currentPointData,
  getNextPointStart,
  setCurrentRoute,
}) => {
  const [markersPositions, setMarkersPositions] = useState();

  useEffect(() => {
    //TODO: This action should be invoked when user clicks "Start route", now it's just test case
    setCurrentRoute('5f319aa34e182d2e1852a547');
  }, []);

  useEffect(() => {
    //TODO: Here we can take if statement away
    if (currentRoute) {
      getNextPointStart({ routeId: currentRoute, pointIndex: 0 });
    }
  }, [currentRoute]);

  useEffect(() => {
    if (currentPointData) {
      //on first point state is not defined so we need this check
      console.log(currentPointData);
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
      getNextPointStart({ routeId: currentRoute, pointIndex: currentPointIndex });
    }
    //TODO: Make window to show after route finished
    else {
      alert('You have succesfully finished this route');
    }
  };

  return (
    <div>
      {markersPositions ? (
        <div>
          <div style={{ position: 'relative', height: '50vh', margin: '30px' }}>
            <MapDirectionsComponent markerPositions={markersPositions} zoom={15}></MapDirectionsComponent>
          </div>
          <CurrentRouteInfoBlock
            currentPointData={currentPointData}
            handleNextRoute={handleNextRoute}
          ></CurrentRouteInfoBlock>
        </div>
      ) : (
        <h1>You didn't choose any route</h1>
      )}
    </div>
  );
};
