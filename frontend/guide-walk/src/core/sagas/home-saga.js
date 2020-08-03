import { takeEvery, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getHomeUserDataStart, getHomeUserDataFail } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* getData({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/user`, 'POST', { username: payload });
    console.log(data);
    // yield put(getHomeUserDataSuccess());
  } catch (e) {
    yield call(handleErrorInSagas, getHomeUserDataFail);
  }
}

export function* getHomeUserData() {
  yield takeEvery(getHomeUserDataStart, getData);
}
