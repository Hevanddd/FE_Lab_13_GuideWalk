import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import './my-and-saved-route-item.scss';

const MyAndSavedRouteItem = ({
  name,
  counter,
  routeId,
  userId,
  userRateIds,
  history,
  location,
  userSavedRoadsIdList,
  getToggleSavedRouteInSavedRoutesPageStart,
  getToggleSavedRouteInMyRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageStart,
}) => {
  const isSavedRoutePage = location.pathname === '/saved-routes';
  const isMyRoutesPage = location.pathname === '/';
  const isSaved = userSavedRoadsIdList && routeId && userSavedRoadsIdList.includes(routeId);
  const isLiked = userRateIds && userId && userRateIds.includes(userId);
  const toggleData = { routeId, userId };

  const handleLikeButtonClick = () => {
    isSavedRoutePage && getToggleRatingRouteInSavedRoutesPageStart(toggleData);
    isMyRoutesPage && getToggleRatingRouteInMyRoutesPageStart(toggleData);
  };

  const handleSavedButton = () => {
    isSavedRoutePage && getToggleSavedRouteInSavedRoutesPageStart(toggleData);
    isMyRoutesPage && getToggleSavedRouteInMyRoutesPageStart(toggleData);
  };

  const handleArrowButton = () => {
    const url = routeId && `/route?${routeId}`;
    history.push(url);
  };

  const urlImgSave = isSaved ? require('../../img/bookmark-saved.svg') : require('../../img/bookmark.svg');
  const urlImgLike = isLiked ? require('../../img/black-like.svg') : require('../../img/like.svg');

  return (
    <div className={classNames('route-item__wrapper')}>
      <img src={require('../../img/Lviv.jpg')} alt='Lviv' className={classNames('route-item__img')} />
      <div className={classNames('route-item__info')}>
        <p className={classNames('route-item__info__name')}>{name}</p>
        <div className={classNames('route-item__info__social')}>
          <div className={classNames('route-item__info__like-button__wrapper')}>
            <p>{counter}</p>
            <button className={classNames('route-item__info__like-button')} onClick={handleLikeButtonClick}>
              <img className={classNames('route-item__info__like-button__img')} src={urlImgLike} alt='like' />
            </button>
          </div>
          <button className={classNames('route-item__info__saved-button')} onClick={handleSavedButton}>
            <img className={classNames('route-item__info__saved-button__img')} src={urlImgSave} alt='save' />
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
    </div>
  );
};

export const MyAndSavedRouteItemComponent = withRouter(MyAndSavedRouteItem);
