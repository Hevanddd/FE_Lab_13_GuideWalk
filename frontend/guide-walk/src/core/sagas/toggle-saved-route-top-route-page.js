import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleSavedRouteFail,
  getAllRoutesStart,
  getUserInfoDataStart,
  getToggleSavedRouteInTopRoutesPageStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteDataInTopRoutesPage({ payload }) {
  const { routeId, userId, userName } = payload;
  try {
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', { routeId, userId });
    yield put(getAllRoutesStart(userName));
    yield put(getUserInfoDataStart(userName));
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  }
}

export function* toggleSavedRouteDataInTopRoutesPage() {
  yield takeEvery(getToggleSavedRouteInTopRoutesPageStart, callToggleSavedRouteDataInTopRoutesPage);
}
