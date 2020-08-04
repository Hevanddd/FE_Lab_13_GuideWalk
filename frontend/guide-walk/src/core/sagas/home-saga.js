import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getHomeUserDataStart, getHomeUserDataFail, getHomeUserDataSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* getData({ payload }) {
  try {
    const { userName } = payload;
    const data = yield call(httpRequest, `/api/user`, 'POST', { username: userName });
    yield put(getHomeUserDataSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getHomeUserDataFail);
  }
}

export function* getHomeUserData() {
  yield takeEvery(getHomeUserDataStart, getData);
}
