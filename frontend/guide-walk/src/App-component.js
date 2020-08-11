import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage, CurrentRoutePage, ProfilePage, AddRoutePage, EditRoutePage, SavedRoutesPage } from './pages';
import { Loader, MapDirectionsComponent, Header, RouteListPage, NavigationComponent } from './ui';
import 'react-toastify/dist/ReactToastify.css';

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
        {/*<Redirect to='/' />*/}
      </Switch>
      <Loader />
      <NavigationComponent />
    </>
  );
};
