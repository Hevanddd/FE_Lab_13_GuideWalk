import { createAction } from 'redux-actions';

export const getAddedRouteDataStart = createAction('GET_ADDED_ROUTE_DATA_START');
export const getAddedRouteDataSuccess = createAction('GET_ADDED_ROUTE_DATA_SUCCESS');
export const getAddedRouteDataFail = createAction('GET_ADDED_ROUTE_DATA_FAIL');

export const removeRouteStart = createAction('REMOVE_ROUTE_START');
export const removeRouteFail = createAction('REMOVE_ROUTE_FAIL');
