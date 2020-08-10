import { createAction } from 'redux-actions';

export const addSavedRouteStart = createAction('ADD_SAVED_ROUTE_START');
export const addSavedRouteFail = createAction('ADD_SAVED_ROUTE_FAIL');
export const removeSavedRouteStart = createAction('REMOVE_SAVED_ROUTE_START');
export const removeSavedRouteFail = createAction('REMOVE_SAVED_ROUTE_FAIL');
