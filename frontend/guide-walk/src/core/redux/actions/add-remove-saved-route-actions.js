import { createAction } from 'redux-actions';

export const toggleSavedRouteStart = createAction('TOGGLE_SAVED_ROUTE_START');
export const toggleSavedRouteSuccess = createAction('TOGGLE_SAVED_ROUTE_SUCCESS');
export const toggleSavedRouteFail = createAction('TOGGLE_SAVED_ROUTE_FAIL');
