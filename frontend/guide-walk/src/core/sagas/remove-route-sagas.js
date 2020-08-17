import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { toast } from 'react-toastify';
import { removeRouteStart, removeRouteFail, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callRemoveRoute({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/user/delete-route`, 'POST', payload.result);
    yield call(toast.success, 'Route successfully deleted!', { autoClose: 2000 });
    payload.history.push('/');
  } catch (e) {
    yield call(handleErrorInSagas, removeRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* removeRoute() {
  yield takeEvery(removeRouteStart, callRemoveRoute);
}
