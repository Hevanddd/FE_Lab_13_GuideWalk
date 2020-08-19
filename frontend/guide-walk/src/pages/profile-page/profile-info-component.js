import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './profile-info-component.module.scss';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#457B9D',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#457B9D',
      },
    },
  },
})(TextField);

export const ProfileInfoComponent = ({ userAuthData }) => {
  const { isAuthenticated, logout } = useAuth0();
  const userName = userAuthData && userAuthData.userName;
  const userEmail = userAuthData && userAuthData.email;
  const imgUrl = userAuthData && userAuthData.picture;

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.form__img}>
          <img src={imgUrl} alt={userName} />
        </div>
        <CssTextField
          label='Name'
          variant='outlined'
          value={userName || ''}
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <CssTextField
          id='standard-read-only-input'
          label='Email'
          value={userEmail || ''}
          variant='outlined'
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {isAuthenticated && (
          <Button variant='contained' className={styles.logout__btn} color='primary' onClick={logout}>
            Log out
          </Button>
        )}
      </form>
    </div>
  );
};
