import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { removeSavedRouteFail, removeSavedRouteStart, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callRemoveSavedRouteData({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/delete-saved`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, removeSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* removeSavedRouteData() {
  yield takeEvery(removeSavedRouteStart, callRemoveSavedRouteData);
}
