import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getUserInfoDataStart, getUserInfoDataFail, getUserInfoDataSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* getData({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/user`, 'POST', { username: payload });
    yield put(getUserInfoDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getUserInfoDataFail);
  }
}

export function* getHomeUserData() {
  yield takeEvery(getUserInfoDataStart, getData);
}
