import { takeEvery, call, put } from 'redux-saga/effects';
import { httpRequest } from '../../services';
import {
  toggleSavedRouteFail,
  getToggleSavedRouteInMyRoutesPageStart,
  toggleSavedRouteSuccess,
} from '../redux/actions';
import { handleErrorInSagas } from '../../services/helpers/handle-error-in-sagas';

function* callToggleSavedRouteDataInMyRoutesPage({ payload }) {
  const { routeId } = payload;
  try {
    yield call(httpRequest, `/api/user/toggle-saved`, 'POST', payload);
    yield put(toggleSavedRouteSuccess(routeId));
  } catch (e) {
    yield call(handleErrorInSagas, toggleSavedRouteFail);
  } finally {
    yield put(loadingStop());
  }
}

export function* toggleSavedRouteDataInMyRoutesPage() {
  yield takeEvery(getToggleSavedRouteInMyRoutesPageStart, callToggleSavedRouteDataInMyRoutesPage);
}
