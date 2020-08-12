import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { TopRoutesPage } from './pages';
import {
  CurrentRoutePage,
  ProfilePage,
  AddRoutePage,
  EditRoutePage,
  SavedRoutesPage,
  MyRoutesPage,
  PreviewRoutePage,
} from './pages';
import { Loader, MapDirectionsComponent, Header, NavigationComponent } from './ui';
import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={TopRoutesPage} />
        <Route path='/current-route' component={CurrentRoutePage} />
        <Route path='/add-route' component={AddRoutePage} />
        <Route path='/edit-route' component={EditRoutePage} />
        <Route path='/direction-route' component={MapDirectionsComponent} />
        <Route path='/profile-info' component={ProfilePage} />
        <Route exact path='/saved-routes' component={SavedRoutesPage} />
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
