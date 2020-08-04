import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';
import * as allRoutesSagas from './get-all-routes-sagas';

export function* rootSagas() {
  yield all([...Object.values(homeSagas), ...Object.values(addRouteSagas), ...Object.values(allRoutesSagas)].map(fork));
}
