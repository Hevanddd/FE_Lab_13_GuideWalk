import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import './my-and-saved-route-item.scss';

export const MyAndSavedRouteItemComponent = ({
  name,
  counter,
  routeId,
  userId,
  toggleRatingFunc,
  toggleSavedRouteStart,
  userRateIds,
  getUserSavedRoutesDataStart,
}) => {
  const history = useHistory();
  const isLiked = userRateIds && userRateIds.includes(userId);
  const toggleData = { routeId, userId };

  const handleLikeButtonClick = () => {
    routeId && userId && toggleRatingFunc({ toggleData, userId });
  };

  const handleSavedButton = () => {
    routeId && userId && toggleSavedRouteStart({ toggleData, userId });
  };

  const handleArrowButton = () => {
    const url = routeId && `/route?${routeId}`;
    history.push(url);
  };

  return (
    <div className={classNames('route-item__wrapper')}>
      <img src={require('../../img/Lviv.jpg')} alt='Lviv' className={classNames('route-item__img')} />
      <div className={classNames('route-item__info')}>
        <p className={classNames('route-item__info__name')}>{name}</p>
        <div className={classNames('route-item__info__like-button__wrapper')}>
          <p>{counter}</p>
          <button className={classNames('route-item__info__like-button')} onClick={handleLikeButtonClick}>
            {!isLiked && (
              <img
                className={classNames('route-item__info__like-button__img')}
                src={require('../../img/like.svg')}
                alt='like'
                width={30}
                height={35}
              />
            )}
            {isLiked && (
              <img
                className={classNames('route-item__info__like-button__img')}
                src={require('../../img/black-like.svg')}
                alt='like'
                width={30}
                height={35}
              />
            )}
          </button>
        </div>
        <button className={classNames('route-item__info__saved-button')} onClick={handleSavedButton}>
          <img
            className={classNames('route-item__info__saved-button__img')}
            src={require('../../img/bookmark-saved.svg')}
            alt='save'
          />
        </button>
        <button className={classNames('route-item__info__arrow-button')} onClick={handleArrowButton}>
          <img
            className={classNames('route-item__info__arrow-button__img')}
            src={require('../../img/up-arrow.svg')}
            alt='arrow'
          />
        </button>
      </div>
    </div>
  );
};
