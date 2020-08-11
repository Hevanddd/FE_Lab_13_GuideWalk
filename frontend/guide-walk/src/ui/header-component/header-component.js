import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import styles from './header-component.module.scss';

const HeaderComponent = ({ isLoading }) => {
  const history = useHistory();

  const [location, setLocation] = useState(history.location.pathname);

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

  const logoClass = classnames('logo__img', {
    'logo__img--loading': isLoading,
  });

  return (
    <header>
      {isHomePage && (
        <div styleName='logo'>
          <span>Guide</span>
          <div styleName={logoClass}></div>
          <span>Walk</span>
        </div>
      )}
      {!isHomePage && (
        <div styleName='header-text'>
          <h2>{locationName}</h2>
          <button styleName='header-text__btn' onClick={goToPreviousPath}></button>
        </div>
      )}
    </header>
  );
};

export default CSSModules(HeaderComponent, styles, { allowMultiple: true });
