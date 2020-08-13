import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleSavedRouteStart,
  toggleSavedRouteFail,
  loadingStop,
  loadingStart,
  getUserSavedRoutesDataStart,
  getToggleSavedRouteInSavedRoutesPageStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteDataInSavedRoutesPage({ payload }) {
  const { userId } = payload;
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', payload);
    yield put(getUserSavedRoutesDataStart(userId));
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleSavedRouteDataInSavedRoutesPage() {
  yield takeEvery(getToggleSavedRouteInSavedRoutesPageStart, callToggleSavedRouteDataInSavedRoutesPage);
}
