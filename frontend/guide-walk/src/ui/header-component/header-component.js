import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header-component.module.css';


export const HeaderComponent = () => {

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
  const logoStyles = isLoading ? `${styles.logo} ${styles.loading}` : `${styles.logo}`;

  return(
    <header>
      {isProfilePage || 
        (isHomePage && (
        <div className={styles.logoWrapper}>
          <span>Guide</span>
          <div className={logoStyles}></div>
          <span>Walk</span>
        </div>
      ))}
        {!isProfilePage && !isHomePage && (
        <div className={styles.textWrapper}>
          <h2>
            {locationName}
          </h2>
          <button className={styles.backBtn} onClick={goToPreviousPath}></button>
        </div>
      )}
    </header>
  )
};
