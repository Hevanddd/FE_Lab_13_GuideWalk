import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleSavedRouteStart,
  toggleSavedRouteFail,
  loadingStop,
  loadingStart,
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
  getUserInfoDataStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteData({ payload }) {
  const { toggleData, userId, isSavedRoutePage, isMyRoutesPage, userName } = payload;
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', toggleData);
    isSavedRoutePage && (yield put(getUserSavedRoutesDataStart(userId)));
    if (isMyRoutesPage) {
      yield put(getUserRoutesDataStart(userId));
      yield put(getUserInfoDataStart(userName));
    }
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleSavedRouteData() {
  yield takeEvery(toggleSavedRouteStart, callToggleSavedRouteData);
}
