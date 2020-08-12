import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  loadingStop,
  loadingStart,
  getToggleRatingRouteInMyRoutesPageStart,
  getUserRoutesDataStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInMyRoutesPage({ payload }) {
  const { userId } = payload;
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getUserRoutesDataStart(userId));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleRatingRouteInMyRoutesPage() {
  yield takeEvery(getToggleRatingRouteInMyRoutesPageStart, callToggleRatingRouteInMyRoutesPage);
}
