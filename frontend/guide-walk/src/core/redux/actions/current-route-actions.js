import { createAction } from 'redux-actions';

export const setCurrentRoute = createAction('SET_CURRENT_ROUTE');
export const setCurrentPoint = createAction('SET_CURRENT_POINT');

export const getNextPointStart = createAction('GET_NEXT_POINT_START');
export const getNextPointSuccess = createAction('GET_NEXT_POINT_SUCCESS');
export const getNextPointFail = createAction('GET_NEXT_POINT_FAIL');