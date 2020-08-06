import { handleActions } from 'redux-actions';
import {
  getAddedRouteDataSuccess,
  getAddedRouteDataFail,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getAllRoutesFail,
  getAllRoutesSuccess,
} from '../actions';

const initialState = {
  addedRouteInfo: null,
  allRoutes: null,
};

const reducerMap = {
  [getAddedRouteDataStart]: (state) => {
    return {
      ...state,
    };
  },
  [getAddedRouteDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      addedRouteInfo: { ...payload },
    };
  },
  [getAddedRouteDataFail]: (state) => {
    return {
      ...state,
      addedRouteInfo: [],
    };
  },
  [getAllRoutesStart]: (state) => {
    return {
      ...state,
    };
  },
  [getAllRoutesSuccess]: (state, { payload }) => {
    return {
      ...state,
      allRoutes: { ...payload },
    };
  },
  [getAllRoutesFail]: (state) => {
    return {
      ...state,
      addedRouteInfo: null,
    };
  },
};

export const userRoutesReducer = handleActions(reducerMap, initialState);
