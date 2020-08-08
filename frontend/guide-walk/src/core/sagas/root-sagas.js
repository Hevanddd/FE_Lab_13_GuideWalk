import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';
import * as allRoutesSagas from './get-all-routes-sagas';
import * as getCoordinatesSagas from './get-coordinates-sagas';
import * as addSavedRoute from './add-saved-route-sagas';
import * as allRouteDataSagas from './all-route-data-sagas';

export function* rootSagas() {
  yield all(
    [
      ...Object.values(homeSagas),
      ...Object.values(addRouteSagas),
      ...Object.values(allRoutesSagas),
      ...Object.values(getCoordinatesSagas),
      ...Object.values(addSavedRoute),
      ...Object.values(allRouteDataSagas),
    ].map(fork)
  );
}
