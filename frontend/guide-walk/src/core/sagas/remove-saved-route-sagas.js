import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { removeSavedRouteFail, removeSavedRouteStart, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callRemoveSavedRoute({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/delete-saved`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, removeSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* removeSavedRoute() {
  yield takeEvery(removeSavedRouteStart, callRemoveSavedRoute);
}
