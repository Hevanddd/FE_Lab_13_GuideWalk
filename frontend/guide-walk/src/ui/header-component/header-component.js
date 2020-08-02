import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header-component.module.css';

export const HeaderComponent = () => {
  const history = useHistory();

  const [location, setLocation] = React.useState('/');

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

  return (
    <header>
      {isProfilePage ||
        (isHomePage && (
          <div className={styles.logoWrapper}>
            <span>Guide</span>
            <div className={`${styles.logo} ${styles.loading}`}></div>
            <span>Walk</span>
          </div>
        ))}
      {!isProfilePage && !isHomePage && (
        <div className={styles.textWrapper}>
          <h2>{locationName}</h2>
          <button className={styles.backBtn} onClick={goToPreviousPath}></button>
        </div>
      )}
    </header>
  );
};
