import React, { useState } from 'react';

import { MapAddEditPoint } from '../../ui/map-add-edit-point';

export const SavedRoutesComponent = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 49.842957,
    longitude: 24.031111,
  });
  return (
    <MapAddEditPoint
      width={'100vw'}
      height={500}
      zoom={12}
      coordinatesMarker={coordinates}
      setCoordinatesMarker={setCoordinates}
      nameMarker={'R'}
    />
  );
};
