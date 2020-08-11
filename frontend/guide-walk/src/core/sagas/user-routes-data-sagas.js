import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  getUserRoutesDataFail,
  getUserRoutesDataStart,
  getUserRoutesDataSuccess,
  loadingStop,
  loadingStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callUserRoutesData({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/user/myroutes/${payload}`, 'GET');
    yield put(getUserRoutesDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getUserRoutesDataFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getUserRoutesData() {
  yield takeEvery(getUserRoutesDataStart, callUserRoutesData);
}
