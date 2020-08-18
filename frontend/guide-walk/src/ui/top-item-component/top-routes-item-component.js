import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import './top-routes-item-component.scss';

const TopRoutesItem = ({
  name,
  rating,
  routeId,
  history,
  key,
  userId,
  userSavedRoadsIdList,
  userRateIds,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
}) => {
  const isSaved = userSavedRoadsIdList && routeId && userSavedRoadsIdList.includes(routeId);
  const isLiked = userRateIds && userId && userRateIds.includes(userId);

  const handleLikeButtonClick = () => {
    getToggleRatingRouteInTopRoutesPageStart({ routeId, userId });
  };

  const handleSavedButton = () => {
    getToggleSavedRouteInTopRoutesPageStart({ routeId, userId });
  };

  const handleArrowButton = () => {
    const url = routeId && `/route?${routeId}`;
    history.push(url);
  };

  const urlImgSave = isSaved ? require('../../img/bookmark-saved.svg') : require('../../img/bookmark.svg');
  const urlImgLike = isLiked ? require('../../img/black-like.svg') : require('../../img/like.svg');

  return (
    <div key={key} className='top-route-item__wrapper'>
      <img src={require('../../img/Lviv.jpg')} alt='Lviv' className='top-route-item__img' />
      <div className='top-route-item__info'>
        <p className='top-route-item__info__name'>{name}</p>
        <div className='top-route-item__info__social'>
          <div className='top-route-item__info__like-button__wrapper'>
            <p className='top-route-item__rating'>{rating}</p>
            <button className='top-route-item__info__like-button' onClick={handleLikeButtonClick}>
              <img className={classNames('top-route-item__info__like-button__img')} src={urlImgLike} alt='like' />
            </button>
          </div>
          <button className='top-route-item__info__saved-button' onClick={handleSavedButton}>
            <img className={classNames('route-item__info__saved-button__img')} src={urlImgSave} alt='save' />
          </button>
          <button className='top-route-item__info__arrow-button' onClick={handleArrowButton}>
            <img
              className='top-route-item__info__arrow-button__img'
              src={require('../../img/up-arrow.svg')}
              alt='arrow'
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export const TopRoutesItemComponent = withRouter(TopRoutesItem);
