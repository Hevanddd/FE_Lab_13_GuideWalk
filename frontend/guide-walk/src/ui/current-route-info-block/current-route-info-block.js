import React from 'react';
import { Button } from '@material-ui/core';
import './current-route-info-block.scss';

export const CurrentRouteInfoBlock = ({ currentPointData, handleNextRoute }) => {
  return (
    <div className='info-block'>
      <h2>Current Route: {currentPointData.routeName}</h2>
      <h3>Next Point: {currentPointData.name}</h3>
      <h3>Point description: {currentPointData.description}</h3>
      <h3>Points left: {currentPointData.pointsLeft}</h3>
      <Button onClick={handleNextRoute}>{currentPointData.pointsLeft ? 'Next Point' : 'Finish'}</Button>
    </div>
  );
};
