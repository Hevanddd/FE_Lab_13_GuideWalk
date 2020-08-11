import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getNextPointStart, getNextPointFail, getNextPointSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callNextPoint({ payload }) {
  try {
    const data = yield call(httpRequest, `/api/route/next`, 'POST', payload);
    yield put(getNextPointSuccess({ pointData: data, pointIndex: payload.pointIndex }));
  } catch (e) {
    yield call(handleErrorInSagas, getNextPointFail);
  }
}

export function* getNextPoint() {
  yield takeEvery(getNextPointStart, callNextPoint);
}
