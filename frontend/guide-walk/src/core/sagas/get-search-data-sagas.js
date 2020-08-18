import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  getSearchDataFail,
  getSearchDataStart,
  getSearchDataSuccess,
  loadingStop,
  loadingStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callSearchData({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `api/route/find?name=${payload}`, 'GET');
    yield put(getSearchDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getSearchDataFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getSearchData() {
  yield takeEvery(getSearchDataStart, callSearchData);
}
