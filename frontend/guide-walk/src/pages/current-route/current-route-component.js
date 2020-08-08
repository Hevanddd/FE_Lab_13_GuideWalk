import React, { useState, useEffect } from 'react';
import { MapDirectionsComponent } from '../../ui/map-direction/map-directions';

export const CurrentRouteComponent = ({
  currentRoute,
  currentPointIndex,
  currentPointData,
  getNextPointStart,
  setCurrentRoute,
}) => {
  const [markersPositions, setMarkersPositions] = useState();

  useEffect(() => {
    setCurrentRoute('5f28420de5f2f124240041c3');
  }, []);

  useEffect(() => {
    if (currentRoute) {
      getNextPointStart({ routeId: currentRoute, pointIndex: 0 });
    }
  }, [currentRoute]);

  useEffect(() => {
    // let startLongitude = markersPositions.finishMarkerPositions[1];
    // let startLatitude = markersPositions.finishMarkerPositions[0];

    if (currentPointData) {
      let startLatitude = 49.842957;
      let startLongitude = 24.031111;
      let finishLatitude = 49.8053;
      let finishLongitude = 24.0021;
      // let finishLatitude = currentPointData.location.lat;
      // let finishLongitude = currentPointData.location.lng;

      setMarkersPositions({
        startMarkerPositions: [startLongitude, startLatitude],
        finishMarkerPositions: [finishLongitude, finishLatitude],
      });
    }
  }, [currentPointData]);

  const handleNextRoute = () => {
    getNextPointStart({ routeId: currentRoute, pointIndex: currentPointIndex });
  };

  if (markersPositions) {
    console.log(markersPositions);
  }
  return (
    <div>
      <h1>IM HERE</h1>
      {markersPositions && <MapDirectionsComponent markerPositions={markersPositions}></MapDirectionsComponent>}
      <button onClick={handleNextRoute}>click</button>
    </div>
  );
};
