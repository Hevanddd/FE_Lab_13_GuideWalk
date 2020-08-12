import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleRatingFail,
  getAllRoutesStart,
  getToggleRatingRouteInTopRoutesPageStart,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleRatingRouteInMyRoutesPage({ payload }) {
  try {
    yield call(httpRequest, `/api/route/rate`, 'POST', payload);
    yield put(getAllRoutesStart());
  } catch (e) {
    yield call(handleErrorInSagas, toggleRatingFail);
  }
}

export function* toggleRatingRouteInMyRoutesPage() {
  yield takeEvery(getToggleRatingRouteInTopRoutesPageStart, callToggleRatingRouteInMyRoutesPage);
}
