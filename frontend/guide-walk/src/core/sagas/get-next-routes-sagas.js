import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getNextRoutesStart, getNextRoutesFail, getNextRoutesSuccess, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callNextRoutesData({payload}) {
  try {
    const size = 10;
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/route/?page=${payload.page}&size=${size}`, 'GET');
    yield put(getNextRoutesSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getNextRoutesFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getNextRoutesData() {
  yield takeEvery(getNextRoutesStart, callNextRoutesData);
}