import { handleActions } from 'redux-actions';
import { getCoordinatesStart, getCoordinatesSuccess, getCoordinatesFail } from '../actions';

const initialState = {
  coordinates: null,
};

const reducerMap = {
  [getCoordinatesStart]: (state) => {
    return {
      ...state,
    };
  },
  [getCoordinatesSuccess]: (state, { payload }) => {
    return {
      ...state,
      coordinates: payload,
    };
  },
  [getCoordinatesFail]: (state) => {
    return {
      ...state,
      coordinates: null,
    };
  },
};

export const coordinatesOfTheRouteReducer = handleActions(reducerMap, initialState);
