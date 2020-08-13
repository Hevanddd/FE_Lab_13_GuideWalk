import { takeEvery, call } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import { toggleRatingStart, toggleRatingFail, loadingStop, loadingStart } from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRoute({ payload }) {
  try {
    yield put(loadingStart());
    yield call(httpRequest, `/api/route/rate`, 'POST', payload);
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  }
}

export function* toggleRatingRoute() {
  yield takeEvery(toggleRatingStart, callToggleRatingRoute);
}
