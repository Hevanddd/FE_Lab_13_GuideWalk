import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { toggleSavedRouteStart, toggleSavedRouteFail, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteData({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleSavedRouteData() {
  yield takeEvery(toggleSavedRouteStart, callToggleSavedRouteData);
}
