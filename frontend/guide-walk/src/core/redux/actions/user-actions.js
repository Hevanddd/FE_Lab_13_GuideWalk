import { createAction } from 'redux-actions';

export const getUserInfoDataStart = createAction('GET_USER_INFO_DATA_START');
export const getUserInfoDataSuccess = createAction('GET_USER_INFO_DATA_SUCCESS');
export const getUserInfoDataFail = createAction('GET_USER_INFO_DATA_FAIL');

export const getUserSavedRoutesDataStart = createAction('GET_USER_SAVED_ROUTES_DATA_START');
export const getUserSavedRoutesDataSuccess = createAction('GET_USER_SAVED_ROUTES_DATA_SUCCESS');
export const getUserSavedRoutesDataFail = createAction('GET_USER_SAVED_ROUTES_DATA_FAIL');

export const getUserRoutesDataStart = createAction('GET_USER_ROUTES_DATA_START');
export const getUserRoutesDataSuccess = createAction('GET_USER_ROUTES_DATA_SUCCESS');
export const getUserRoutesDataFail = createAction('GET_USER_ROUTES_DATA_FAIL');
