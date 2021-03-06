import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { toast } from 'react-toastify';
import {
  getAddedRouteDataStart,
  getAddedRouteDataFail,
  getAddedRouteDataSuccess,
  loadingStop,
  loadingStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAddedRouteData({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/route/create`, 'POST', payload.route);
    yield put(getAddedRouteDataSuccess(data));
    yield call(toast.success, 'Route successfully added!', { autoClose: 2000 });
    payload.history.push('/');
  } catch (e) {
    yield call(handleErrorInSagas, getAddedRouteDataFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getAddedRouteData() {
  yield takeEvery(getAddedRouteDataStart, callAddedRouteData);
}
