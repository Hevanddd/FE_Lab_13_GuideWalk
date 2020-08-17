import { takeEvery, put, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { toast } from 'react-toastify';
import { editRouteStart, editRouteFail, editRouteSuccess, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callEditRoute({ payload }) {
  try {
    yield put(loadingStart());
    const data = yield call(httpRequest, `/api/route/edit`, 'POST', payload.route);
    yield put(editRouteSuccess(data));
    yield call(toast.success, 'Route successfully edited!', { autoClose: 2000 });
    payload.history.push('/');
  } catch (e) {
    yield call(handleErrorInSagas, editRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* getEditRoute() {
  yield takeEvery(editRouteStart, callEditRoute);
}
