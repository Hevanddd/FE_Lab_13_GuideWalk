import { createAction } from 'redux-actions';

export const getAllRoutesStart = createAction('GET_ALL_ROUTES_START');
export const getAllRoutesSuccess = createAction('GET_ALL_ROUTES_SUCCESS');
export const getAllRoutesFail = createAction('GET_ALL_ROUTES_FAIL');
