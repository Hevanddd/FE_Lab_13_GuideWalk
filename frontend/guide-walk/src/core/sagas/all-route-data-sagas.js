import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getAllRouteDataFail, getAllRouteDataStart, getAllRouteDataSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAllRouteData({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/route/edit/${payload}`, 'GET');
    yield put(getAllRouteDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getAllRouteDataFail);
  }
}

export function* getAllRouteData() {
  yield takeEvery(getAllRouteDataStart, callAllRouteData);
}
