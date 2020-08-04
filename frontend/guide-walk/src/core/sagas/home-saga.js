import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getHomeUserDataStart, getHomeUserDataFail } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* getData({ payload }) {
  try {
    yield call(httpRequest, '/api/user', 'POST', { username: payload });
    // yield put(getHomeUserDataSuccess());
  } catch (e) {
    yield call(handleErrorInSagas, getHomeUserDataFail);
  }
}

export function* getHomeUserData() {
  yield takeEvery(getHomeUserDataStart, getData);
}
