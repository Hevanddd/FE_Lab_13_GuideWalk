import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage, SavedRoutesPage, AddRoutePage, EditRoutePage } from './pages';
import { RouteListPage } from './ui/map-component';
import { NavigationComponent } from './ui/navigation-component';
import { HeaderComponent } from './ui/header-component';
import { MapDirectionsComponent } from './ui/map-direction';

import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/route-list' component={RouteListPage} />
        <Route exact path='/add-route' component={AddRoutePage} />
        <Route exact path='/edit-route' component={EditRoutePage} />
        <Route exact path='/direction-route' component={MapDirectionsComponent} />
        <Route exact path='/saved-routes' component={SavedRoutesPage} />
        <Redirect to='/' />
      </Switch>
      <NavigationComponent />
    </>
  );
};
