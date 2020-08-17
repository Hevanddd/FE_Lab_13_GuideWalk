import React from 'react';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import './current-route-info-block.scss';

export const CurrentRouteInfoBlock = ({ currentPointData }) => {
  return (
    <div className={classNames('info-block')}>
      <h2 className={classNames('info-block__name')}>Route name: {currentPointData.routeName}</h2>
      <h4 className={classNames('info-block__description')}>Point description:</h4>
      <p className={classNames('info-block__description__text')}>{currentPointData.description}</p>
      <h4 className={classNames('info-block__points-left')}>Points left: {currentPointData.pointsLeft}</h4>
    </div>
  );
};
