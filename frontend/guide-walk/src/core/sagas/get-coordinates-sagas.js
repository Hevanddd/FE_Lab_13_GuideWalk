import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getCoordinatesFail, getCoordinatesSuccess, getCoordinatesStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callGetCoordinatesData({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/route/preview/${payload}`, 'GET');
    yield put(getCoordinatesSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getCoordinatesFail);
  }
}

export function* getCoordinatesData() {
  yield takeEvery(getCoordinatesStart, callGetCoordinatesData);
}
