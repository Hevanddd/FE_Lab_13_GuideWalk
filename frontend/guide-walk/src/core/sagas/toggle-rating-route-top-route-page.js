import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  getToggleRatingRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageSuccess,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInMyRoutesPage({ payload }) {
  const { routeId } = payload;
  try {
    const data = yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getToggleRatingRouteInTopRoutesPageSuccess({ routeId, data }));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  }
}

export function* toggleRatingRouteInMyRoutesPage() {
  yield takeEvery(getToggleRatingRouteInTopRoutesPageStart, callToggleRatingRouteInMyRoutesPage);
}
