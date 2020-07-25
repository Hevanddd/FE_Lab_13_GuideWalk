import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage, RouteListPage } from './components';

import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/route-list'} component={RouteListPage} />
      </Switch>
    </>
  );
};
