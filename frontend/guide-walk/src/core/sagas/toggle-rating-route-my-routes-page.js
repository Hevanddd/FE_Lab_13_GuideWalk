import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  loadingStop,
  loadingStart,
  getToggleRatingRouteInMyRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageSuccess,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInMyRoutesPage({ payload }) {
  const { routeId } = payload;
  try {
    const data = yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getToggleRatingRouteInMyRoutesPageSuccess({ routeId, data }));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleRatingRouteInMyRoutesPage() {
  yield takeEvery(getToggleRatingRouteInMyRoutesPageStart, callToggleRatingRouteInMyRoutesPage);
}
