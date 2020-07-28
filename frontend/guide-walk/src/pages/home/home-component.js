import React from 'react';
import { MapComponent } from '../../ui/map-component/map-component';

export const HomeComponent = () => {
  return (
    <div>
      <MapComponent width={'100vw'} height={'50vh'} zoom={15} />
    </div>
  );
};
