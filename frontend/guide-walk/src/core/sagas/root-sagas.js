import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';
import * as allRoutesSagas from './get-all-routes-sagas';
import * as getCoordinatesSagas from './get-coordinates-sagas';
import * as allRouteDataSagas from './all-route-data-sagas';
import * as nextPointSagas from './next-point-sagas';
import * as toggleRatingSagas from './toggle-rating-sagas';
import * as removeRouteSagas from './remove-route-sagas';
import * as userRoutesDataSagas from './user-routes-data-sagas';
import * as userSavedRoutesData from './get-user-saved-routes-sagas';
import * as toggleSavedRoute from './toggle-saved-route-sagas';

export function* rootSagas() {
  yield all(
    [
      ...Object.values(homeSagas),
      ...Object.values(addRouteSagas),
      ...Object.values(allRoutesSagas),
      ...Object.values(getCoordinatesSagas),
      ...Object.values(allRouteDataSagas),
      ...Object.values(nextPointSagas),
      ...Object.values(toggleRatingSagas),
      ...Object.values(removeRouteSagas),
      ...Object.values(userRoutesDataSagas),
      ...Object.values(userSavedRoutesData),
      ...Object.values(toggleSavedRoute),
    ].map(fork)
  );
}
