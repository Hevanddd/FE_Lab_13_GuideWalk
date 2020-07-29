import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages';
import { RouteListPage } from './ui/map-component';

import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/route-list' component={RouteListPage} />
        <Redirect to='/' />
      </Switch>
    </>
  );
};
