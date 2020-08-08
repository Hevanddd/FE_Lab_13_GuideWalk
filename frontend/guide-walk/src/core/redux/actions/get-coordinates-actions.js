import { createAction } from 'redux-actions';

export const getCoordinatesStart = createAction('GET_COORDINATES_START');
export const getCoordinatesSuccess = createAction('GET_COORDINATES_SUCCESS');
export const getCoordinatesFail = createAction('GET_COORDINATES_FAIL');
