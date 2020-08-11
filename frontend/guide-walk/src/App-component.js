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
import {
  HomePage,
  CurrentRoutePage,
  ProfilePage,
  AddRoutePage,
  EditRoutePage,
  SavedRoutesPage,
  MyRoutesPage,
  PreviewRoutePage
} from './pages';
import { Loader, MapDirectionsComponent, Header, RouteListPage, NavigationComponent } from './ui';
import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/route-list' component={RouteListPage} />
        <Route path='/current-route' component={CurrentRoutePage} />
        <Route path='/add-route' component={AddRoutePage} />
        <Route path='/edit-route' component={EditRoutePage} />
        <Route path='/direction-route' component={MapDirectionsComponent} />
        <Route path='/profile-info' component={ProfilePage} />
        <Route exact path='/saved-routes' component={SavedRoutesPage} />
        <Route exact path='/top-routes' component={TopRoutesPage} />
        <Route path='/saved-routes' component={SavedRoutesPage} />
        <Route path='/my-routes' component={MyRoutesPage} />
        <Route path='/route' component={PreviewRoutePage} />

        <Redirect to='/' />
      </Switch>
      <Loader />
      <NavigationComponent />
    </>
  );
};
