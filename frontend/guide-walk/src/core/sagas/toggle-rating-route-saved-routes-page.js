import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  getToggleRatingRouteInSavedRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageSuccess,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInSavedRoutesPage({ payload }) {
  const { routeId } = payload;
  try {
    const data = yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getToggleRatingRouteInSavedRoutesPageSuccess({ routeId, data }));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  }
}

export function* toggleRatingRouteInSavedRoutesPage() {
  yield takeEvery(getToggleRatingRouteInSavedRoutesPageStart, callToggleRatingRouteInSavedRoutesPage);
}
