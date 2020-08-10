import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { addSavedRouteStart, addSavedRouteFail, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAddSavedRouteData({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/add-saved`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, addSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* addSavedRouteData() {
  yield takeEvery(addSavedRouteStart, callAddSavedRouteData);
}
