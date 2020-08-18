import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  CurrentRoutePage,
  ProfilePage,
  AddRoutePage,
  EditRoutePage,
  SavedRoutesPage,
  PreviewRoutePage,
  HomePage,
  TabPage
} from './pages';
import { Loader, Header, NavigationComponent } from './ui';
import 'react-toastify/dist/ReactToastify.css';

export const AppComponent = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={TabPage} />
        <Route path='/current-route' component={CurrentRoutePage} />
        <Route path='/add-route' component={AddRoutePage} />
        <Route path='/edit-route' component={EditRoutePage} />
        <Route path='/profile-info' component={ProfilePage} />
        <Route path='/saved-routes' component={SavedRoutesPage} />
        <Route path='/route' component={PreviewRoutePage} />
        <Route path='/home' component={HomePage} />

        <Redirect to='/' />
      </Switch>
      <Loader />
      <NavigationComponent />
    </>
  );
};
