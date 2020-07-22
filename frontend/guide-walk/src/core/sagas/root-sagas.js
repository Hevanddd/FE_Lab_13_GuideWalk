import {all, fork} from 'redux-saga/effects';
import * as homeSagas from './home-saga';

export function* rootSagas() {
  yield all([...Object.values(homeSagas)].map(fork));
}
