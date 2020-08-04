import { createAction } from 'redux-actions';

export const getHomeUserDataStart = createAction('GET_HOME_USER_DATA_START');
export const getHomeUserDataSuccess = createAction('GET_HOME_USER_DATA_SUCCESS');
export const getHomeUserDataFail = createAction('GET_HOME_USER_DATA_FAIL');
