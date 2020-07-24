import { takeEvery, put, call } from 'redux-saga/effects';
import { getHomeUserDataStart, getHomeUserDataSuccess, getHomeUserDataFail } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* getData({ payload }) {
  try {
    yield put(getHomeUserDataSuccess(payload));
  } catch {
    yield call(handleErrorInSagas, getHomeUserDataFail);
  }
}

export function* getHomeUserData() {
  yield takeEvery(getHomeUserDataStart, getData);
}
