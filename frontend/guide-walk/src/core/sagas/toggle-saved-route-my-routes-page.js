import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleSavedRouteFail,
  getUserRoutesDataStart,
  getUserInfoDataStart,
  getToggleSavedRouteInMyRoutesPageStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteDataInMyRoutesPage({ payload }) {
  const { userId, routeId, userName } = payload;
  try {
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', { userId, routeId });
    yield put(getUserRoutesDataStart(userId));
    yield put(getUserInfoDataStart(userName));
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  }
}

export function* toggleSavedRouteDataInMyRoutesPage() {
  yield takeEvery(getToggleSavedRouteInMyRoutesPageStart, callToggleSavedRouteDataInMyRoutesPage);
}
