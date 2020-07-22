import {call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

export function* handleErrorInSagas(action) {
  yield call(toast.error, 'Something went wrong.', {autoClose: 2000});
  yield put(action());
}
