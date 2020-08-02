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

  
  if(location === '/profile' || location === '/'){
    return(
      <header>
        <div className={styles.logoWrapper}>
          <span>Guide</span>
          <div className={`${styles.logo} ${styles.loading}`}></div>
          <span>Walk</span>
        </div>
      </header>
    )
  }

  return (
    <header>
      <div className={styles.textWrapper}>
        <h2>
          {location.replace(/\//, '').replace(/-/g, ' ')}
        </h2>
        <button className={styles.backBtn} onClick={goToPreviousPath}></button>
      </div>
    </header>
  );
};
