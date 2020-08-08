import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  getCoordinatesFail,
  getCoordinatesSuccess,
  getCoordinatesStart,
  loadingStop,
  loadingStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callGetCoordinatesData({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/route/preview/${payload}`, 'GET');
    yield put(getCoordinatesSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getCoordinatesFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getCoordinatesData() {
  yield takeEvery(getCoordinatesStart, callGetCoordinatesData);
}
