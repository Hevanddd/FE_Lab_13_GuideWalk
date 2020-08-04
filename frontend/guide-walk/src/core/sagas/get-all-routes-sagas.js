import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { getAllRoutesStart, getAllRoutesFail, getAllRoutesSuccess } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callAllRoutesData() {
  try {
    const data = yield call(httpRequest, `/api/route`, 'GET');
    yield put(getAllRoutesSuccess(data));
  } catch (e) {
    yield call(handleErrorInSagas, getAllRoutesFail);
  }
}

export function* getAllRoutesData() {
  yield takeEvery(getAllRoutesStart, callAllRoutesData);
}
