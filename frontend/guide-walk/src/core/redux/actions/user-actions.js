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

export const getToggleSavedRouteInSavedRoutesPageStart = createAction(
  'GET_TOGGLE_SAVED_ROUTE_IN_SAVED_ROUTES_PAGE_START'
);
export const getToggleSavedRouteInMyRoutesPageStart = createAction('GET_TOGGLE_SAVED_ROUTE_IN_MY_ROUTES_PAGE_START');
export const getToggleSavedRouteInTopRoutesPageStart = createAction('GET_TOGGLE_SAVED_ROUTE_IN_TOP_ROUTES_PAGE_START');

export const getToggleSavedRouteInSavedRoutesPageSuccess = createAction(
  'GET_TOGGLE_SAVED_ROUTE_IN_SAVED_ROUTES_PAGE_SUCCESS'
);
export const getToggleSavedRouteInMyRoutesPageSuccess = createAction(
  'GET_TOGGLE_SAVED_ROUTE_IN_MY_ROUTES_PAGE_SUCCESS'
);
export const getToggleSavedRouteInTopRoutesPageSuccess = createAction(
  'GET_TOGGLE_SAVED_ROUTE_IN_TOP_ROUTES_PAGE_SUCCESS'
);

export const getToggleRatingRouteInSavedRoutesPageStart = createAction(
  'GET_TOGGLE_RATING_ROUTE_IN_SAVED_ROUTES_PAGE_START'
);
export const getToggleRatingRouteInMyRoutesPageStart = createAction('GET_TOGGLE_RATING_ROUTE_IN_MY_ROUTES_PAGE_START');
export const getToggleRatingRouteInTopRoutesPageStart = createAction(
  'GET_TOGGLE_RATING_ROUTE_IN_TOP_ROUTES_PAGE_START'
);

export const getToggleRatingRouteInSavedRoutesPageSuccess = createAction(
  'GET_TOGGLE_RATING_ROUTE_IN_SAVED_ROUTES_PAGE_SUCCESS'
);
export const getToggleRatingRouteInMyRoutesPageSuccess = createAction('GET_TOGGLE_RATING_ROUTE_IN_MY_ROUTES_PAGE_SUCCESS');
export const getToggleRatingRouteInTopRoutesPageSuccess = createAction(
  'GET_TOGGLE_RATING_ROUTE_IN_TOP_ROUTES_PAGE_SUCCESS'
);
