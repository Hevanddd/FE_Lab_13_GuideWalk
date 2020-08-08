import React, { useState, useEffect } from 'react';
import { MapDirectionsComponent } from '../../ui/map-direction/map-directions';
import { CurrentRouteInfoBlock } from '../../ui/current-route-info-block/current-route-info-block';

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
    setCurrentRoute('5f28420de5f2f124240041c3');
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
      if (!markersPositions) {
        setMarkersPositions({
          //TODO: Set start marker to user geolocation in moment of invocation Start Route
          startMarkerPositions: [49.842957, 26.041111],
          finishMarkerPositions: [currentPointData.location.lng, currentPointData.location.lat],
        });
      }
      //on next points we have start marker as previous point and finish marker as next point
      else {
        setMarkersPositions({
          startMarkerPositions: [markersPositions.finishMarkerPositions[0], markersPositions.finishMarkerPositions[1]],
          finishMarkerPositions: [currentPointData.location.lng, currentPointData.location.lat],
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
          <div style = {{position: 'relative', height: '50vh', margin: '30px'}}>
            <MapDirectionsComponent markerPositions={markersPositions} zoom={1} dragable = {false}></MapDirectionsComponent>
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
