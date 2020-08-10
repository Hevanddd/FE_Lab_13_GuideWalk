import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getAllRoutesStart, getAllRoutesFail, getAllRoutesSuccess, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAllRoutesData() {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/route`, 'GET');
    yield put(getAllRoutesSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getAllRoutesFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getAllRoutesData() {
  yield takeEvery(getAllRoutesStart, callAllRoutesData);
}
