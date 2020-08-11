import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { HomePage } from './pages';
import { ProfilePage } from './pages';
import { AddRoutePage } from './pages';
import { EditRoutePage } from './pages';
import { SavedRoutesPage } from './pages';
import { TopRoutesPage } from './pages'

import { RouteListPage } from './ui/map-component';
import { NavigationComponent } from './ui/navigation-component';
import { Header } from './ui/header-component';
import { MapDirectionsComponent } from './ui/map-direction';
import 'react-toastify/dist/ReactToastify.css';
import { CurrentRoutePage } from './pages/current-route';

export const AppComponent = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/route-list' component={RouteListPage} />
        <Route exact path='/current-route' component={CurrentRoutePage} />
        <Route exact path='/add-route' component={AddRoutePage} />
        <Route exact path='/edit-route' component={EditRoutePage} />
        <Route exact path='/direction-route' component={MapDirectionsComponent} />
        <Route path='/profile-info' component={ProfilePage} />
        <Route exact path='/saved-routes' component={SavedRoutesPage} />
        <Route exact path='/top-routes' component={TopRoutesPage} />
        <Redirect to='/' />
      </Switch>
      <NavigationComponent />
    </>
  );
};
