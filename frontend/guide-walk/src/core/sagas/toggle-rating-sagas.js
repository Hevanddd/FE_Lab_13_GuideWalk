import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingStart,
  toggleRatingFail,
  loadingStop,
  loadingStart,
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRoute({ payload }) {
  const { toggleData, userId, isSavedRoutePage, isMyRoutesPage } = payload;
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/route/rate`, 'POST', toggleData);
    isSavedRoutePage && (yield put(getUserSavedRoutesDataStart(userId)));
    isMyRoutesPage && (yield put(getUserRoutesDataStart(userId)));
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleRatingRoute() {
  yield takeEvery(toggleRatingStart, callToggleRatingRoute);
}
