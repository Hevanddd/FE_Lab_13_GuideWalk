import React, { useState } from 'react';
import { MapDirectionsComponent } from '../../ui/map-direction';

export const SavedRoutesComponent = () => {
  let startLatitude = 49.842957;
  let startLongitude = 24.031111;
  let finishLatitude = 49.8053;
  let finishLongitude = 24.0021;

  const markerPositions = {
    startMarkerPositions: [startLongitude, startLatitude],
    finishMarkerPositions: [finishLongitude, finishLatitude],
  };

  const [markersPositions, setMarkersPositions] = useState(markerPositions);

  const handleOnClick = () => {
    startLongitude = finishLongitude;
    startLatitude = finishLatitude;
    finishLongitude = 24.026;
    finishLatitude = 49.765;
    setMarkersPositions({
      startMarkerPositions: [startLongitude, startLatitude],
      finishMarkerPositions: [finishLongitude, finishLatitude],
    });
  };
  return (
    <div>
      <MapDirectionsComponent markerPositions={markersPositions} zoom={15} />
      <button onClick={handleOnClick}>Set next markers</button>
    </div>
  );
};
