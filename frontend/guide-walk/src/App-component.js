import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
<<<<<<< HEAD
import { HomePage, ProfilePage } from './pages';
import { AddRoutePage } from './pages';
import { EditRoutePage } from './pages';
=======
import { HomePage, SavedRoutesPage, AddRoutePage, EditRoutePage } from './pages';
>>>>>>> e1605f740c85ff28adc398812b3f2de127695db1
import { RouteListPage } from './ui/map-component';
import { NavigationComponent } from './ui/navigation-component';
import HeaderComponent from './ui/header-component';
import { MapDirectionsComponent } from './ui/map-direction';

<<<<<<< HEAD


=======
>>>>>>> e1605f740c85ff28adc398812b3f2de127695db1
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
<<<<<<< HEAD
        <Route path='/profile-info' component={ProfilePage} />
=======
        <Route exact path='/saved-routes' component={SavedRoutesPage} />
>>>>>>> e1605f740c85ff28adc398812b3f2de127695db1
        <Redirect to='/' />
      </Switch>
      <NavigationComponent />
    </>
  );
};
