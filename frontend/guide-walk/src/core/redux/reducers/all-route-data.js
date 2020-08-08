import { handleActions } from 'redux-actions';
import { getAllRouteDataFail, getAllRouteDataStart, getAllRouteDataSuccess } from '../actions';

const initialState = {
  routeData: null,
};

const reducerMap = {
  [getAllRouteDataStart]: (state) => {
    return {
      ...state,
    };
  },
  [getAllRouteDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      routeData: payload,
    };
  },
  [getAllRouteDataFail]: (state) => {
    return {
      ...state,
      routeData: null,
    };
  },
};

export const allRouteDataReducer = handleActions(reducerMap, initialState);
