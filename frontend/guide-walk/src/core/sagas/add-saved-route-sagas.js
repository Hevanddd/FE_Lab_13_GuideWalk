import { takeEvery, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { addSavedRouteStart, addSavedRouteFail } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAddSavedRouteData({ payload }) {
  try {
    yield call(httpRequest, `/api/user/addSaved`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, addSavedRouteFail);
  }
}

export function* addSavedRouteData() {
  yield takeEvery(addSavedRouteStart, callAddSavedRouteData);
}
