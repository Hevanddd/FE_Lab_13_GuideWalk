import React from 'react';
import classNames from 'classnames';
import './my-and-saved-route-item.scss';

export const MyAndSavedRouteItemComponent = ({ name }) => {
  return (
    <div className={classNames('route-item__wrapper')}>
      <img src={require('../../img/Lviv.jpg')} alt='Lviv' className={classNames('route-item__img')} />
      <div className={classNames('route-item__info')}>
        <p className={classNames('route-item__info__name')}>{name}</p>
        <button className={classNames('route-item__info__like-button')}>
          <img
            className={classNames('route-item__info__like-button__img')}
            src={require('../../img/like.svg')}
            alt='save'
          />
        </button>
        <button className={classNames('route-item__info__saved-button')}>
          <img
            className={classNames('route-item__info__saved-button__img')}
            src={require('../../img/bookmark.svg')}
            alt='save'
          />
        </button>
        <button className={classNames('route-item__info__arrow-button')}>
          <img
            className={classNames('route-item__info__arrow-button__img')}
            src={require('../../img/up-arrow.svg')}
            alt='save'
          />
        </button>
      </div>
    </div>
  );
};
