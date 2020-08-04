import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import styles from './header-component.module.scss';

const HeaderComponent = () => {

  const history = useHistory();
  const [location, setLocation] = useState('/');

  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    return history.listen((location) => {
      setLocation(location.pathname);
    });
  }, [history]);

  const isProfilePage = location === '/profile';
  const isHomePage = location === '/';
  const locationName = location.replace(/\//, '').replace(/-/g, ' ');
  const isLoading = true;

  const  logoClass = classnames({
    'logo__img': true,
    'logo__img--loading': isLoading
  })

  return(
    <header>
      {isProfilePage ||
        (isHomePage && (
        <div styleName="logo">
          <span>Guide</span>
          <div styleName={logoClass}></div>
          <span>Walk</span>
        </div>
      ))}
        {!isProfilePage && !isHomePage && (
        <div styleName="header-text">
          <h2>
            {locationName}
          </h2>
          <button styleName="header-text__btn" onClick={goToPreviousPath}></button>
        </div>
      )}
    </header>
  )
};

export default CSSModules(HeaderComponent, styles, {allowMultiple: true});