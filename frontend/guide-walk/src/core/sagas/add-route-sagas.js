import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getAddedRouteDataStart, getAddedRouteDataFail, getAddedRouteDataSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAddedRouteData({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/route/createRoute`, 'POST', payload);
    yield put(getAddedRouteDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getAddedRouteDataFail);
  }
}

export function* getAddedRouteData() {
  yield takeEvery(getAddedRouteDataStart, callAddedRouteData);
}
