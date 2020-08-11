import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  HomePage,
  CurrentRoutePage,
  ProfilePage,
  AddRoutePage,
  EditRoutePage,
  SavedRoutesPage,
  MyRoutesPage,
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
        <Route path='/saved-routes' component={SavedRoutesPage} />
        <Route path='/my-routes' component={MyRoutesPage} />

        {/*<Redirect to='/' />*/}
      </Switch>
      <Loader />
      <NavigationComponent />
    </>
  );
};
