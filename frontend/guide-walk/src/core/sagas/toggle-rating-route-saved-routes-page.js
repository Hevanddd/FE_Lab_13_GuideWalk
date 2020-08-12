import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  loadingStop,
  loadingStart,
  getUserSavedRoutesDataStart,
  getToggleRatingRouteInSavedRoutesPageStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInSavedRoutesPage({ payload }) {
  const { userId } = payload;
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getUserSavedRoutesDataStart(userId));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleRatingRouteInSavedRoutesPage() {
  yield takeEvery(getToggleRatingRouteInSavedRoutesPageStart, callToggleRatingRouteInSavedRoutesPage);
}
