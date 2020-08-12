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

export const getToggleSavedRouteInSavedRoutesPageStart = createAction('GET_TOGGLE_SAVED_ROUTE_IN_SAVED_ROUTES_PAGE');
export const getToggleSavedRouteInMyRoutesPageStart = createAction('GET_TOGGLE_SAVED_ROUTE_IN_MY_ROUTES_PAGE');
export const getToggleSavedRouteInTopRoutesPageStart = createAction('GET_TOGGLE_SAVED_ROUTE_IN_TOP_ROUTES_PAGE');

export const getToggleRatingRouteInSavedRoutesPageStart = createAction('GET_TOGGLE_RATING_ROUTE_IN_SAVED_ROUTES_PAGE');
export const getToggleRatingRouteInMyRoutesPageStart = createAction('GET_TOGGLE_RATING_ROUTE_IN_MY_ROUTES_PAGE');
export const getToggleRatingRouteInTopRoutesPageStart = createAction('GET_TOGGLE_RATING_ROUTE_IN_TOP_ROUTES_PAGE');
