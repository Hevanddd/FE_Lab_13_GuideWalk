import { createAction } from 'redux-actions';

export const getUserInfoDataStart = createAction('GET_USER_INFO_DATA_START');
export const getUserInfoDataSuccess = createAction('GET_USER_INFO_DATA_SUCCESS');
export const getUserInfoDataFail = createAction('GET_USER_INFO_DATA_FAIL');
