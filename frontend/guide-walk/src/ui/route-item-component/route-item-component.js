import React from 'react';
import classNames from 'classnames';
import './route-item.scss';

export const RouteItemComponent = ({ data }) => {
  return (
    <div className={classNames('route')}>
      <div className={classNames('route__title')}>Hi</div>
      {data.map(({ image, rating, name }) => {
        return (
          <div key={image}>
            <img src={image} alt='img' />
            <p>{rating}</p>
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};
