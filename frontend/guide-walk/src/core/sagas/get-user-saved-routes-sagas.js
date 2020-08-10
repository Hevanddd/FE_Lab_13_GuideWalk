import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  getUserSavedRoutesDataSuccess,
  getUserSavedRoutesDataStart,
  getUserSavedRoutesDataFail,
  loadingStop,
  loadingStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callUserSavedRoutesData({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/user/saved/${payload}`, 'GET');
    yield put(getUserSavedRoutesDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getUserSavedRoutesDataFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getUserSavedRoutesData() {
  yield takeEvery(getUserSavedRoutesDataStart, callUserSavedRoutesData);
}
