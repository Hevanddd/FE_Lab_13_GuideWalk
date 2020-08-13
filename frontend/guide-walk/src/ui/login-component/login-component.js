import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import './login.scss';

export const LoginComponent = ({ loginWithRedirect }) => {
  return (
    <div className={classNames('login')}>
      <h1>Guide Walk</h1>
      <p>Please Login first</p>
      <Button color='primary' variant='contained' className={classNames('login__button')} onClick={loginWithRedirect}>
        Login
      </Button>
    </div>
  );
};
