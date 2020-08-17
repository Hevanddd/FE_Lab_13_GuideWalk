import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';
import * as editRouteSagas from './edit-route-sagas';
import * as allRoutesSagas from './get-all-routes-sagas';
import * as nextRoutesSagas from './get-next-routes-sagas';
import * as getCoordinatesSagas from './get-coordinates-sagas';
import * as allRouteDataSagas from './all-route-data-sagas';
import * as nextPointSagas from './next-point-sagas';
import * as removeRouteSagas from './remove-route-sagas';
import * as userRoutesDataSagas from './user-routes-data-sagas';
import * as userSavedRoutesData from './get-user-saved-routes-sagas';
import * as toggleSavedRouteInSavedRoutesPage from './toggle-saved-route-saved-routes-page';
import * as toggleSavedRouteInMyRoutesPage from './toggle-saved-route-my-routes-page';
import * as toggleSavedRouteInTopRoutesPage from './toggle-saved-route-top-route-page';
import * as toggleRatingRouteInSavedRoutesPage from './toggle-rating-route-saved-routes-page';
import * as toggleRatingRouteInMyRoutesPage from './toggle-rating-route-my-routes-page';
import * as toggleRatingRouteInTopRoutesPage from './toggle-rating-route-top-route-page';

export function* rootSagas() {
  yield all(
    [
      ...Object.values(homeSagas),
      ...Object.values(addRouteSagas),
      ...Object.values(editRouteSagas),
      ...Object.values(allRoutesSagas),
      ...Object.values(nextRoutesSagas),
      ...Object.values(getCoordinatesSagas),
      ...Object.values(allRouteDataSagas),
      ...Object.values(nextPointSagas),
      ...Object.values(removeRouteSagas),
      ...Object.values(userRoutesDataSagas),
      ...Object.values(userSavedRoutesData),
      ...Object.values(toggleSavedRouteInSavedRoutesPage),
      ...Object.values(toggleSavedRouteInMyRoutesPage),
      ...Object.values(toggleSavedRouteInTopRoutesPage),
      ...Object.values(toggleRatingRouteInSavedRoutesPage),
      ...Object.values(toggleRatingRouteInMyRoutesPage),
      ...Object.values(toggleRatingRouteInTopRoutesPage),
    ].map(fork)
  );
}
