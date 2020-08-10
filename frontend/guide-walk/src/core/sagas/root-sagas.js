import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';
import * as allRoutesSagas from './get-all-routes-sagas';
import * as getCoordinatesSagas from './get-coordinates-sagas';
import * as addSavedRoute from './add-saved-route-sagas';
import * as allRouteDataSagas from './all-route-data-sagas';
import * as nextPointSagas from './next-point-sagas';
import * as removeSavedRouteSagas from './remove-saved-route-sagas';
import * as toggleRatingSagas from './toggle-rating-sagas';
import * as removeRouteSagas from './remove-route-sagas';

export function* rootSagas() {
  yield all(
    [
      ...Object.values(homeSagas),
      ...Object.values(addRouteSagas),
      ...Object.values(allRoutesSagas),
      ...Object.values(getCoordinatesSagas),
      ...Object.values(addSavedRoute),
      ...Object.values(allRouteDataSagas),
      ...Object.values(nextPointSagas),
      ...Object.values(removeSavedRouteSagas),
      ...Object.values(toggleRatingSagas),
      ...Object.values(removeRouteSagas),
    ].map(fork)
  );
}
