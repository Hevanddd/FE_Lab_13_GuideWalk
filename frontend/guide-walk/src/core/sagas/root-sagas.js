import { all, fork } from 'redux-saga/effects';
import * as homeSagas from './user-saga';
import * as addRouteSagas from './add-route-sagas';

export function* rootSagas() {
  yield all([...Object.values(homeSagas), ...Object.values(addRouteSagas)].map(fork));
}
