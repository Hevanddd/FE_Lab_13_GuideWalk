import { createAction } from 'redux-actions';

export const getAllRouteDataStart = createAction('GET_ALL_ROUTE_DATA_START');
export const getAllRouteDataSuccess = createAction('GET_ALL_ROUTE_DATA_SUCCESS');
export const getAllRouteDataFail = createAction('GET_ALL_ROUTE_DATA_FAIL');
