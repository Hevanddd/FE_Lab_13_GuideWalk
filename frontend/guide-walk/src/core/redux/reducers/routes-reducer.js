import { handleActions } from 'redux-actions';
import {
  getAddedRouteDataSuccess,
  getAddedRouteDataFail,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getAllRoutesFail,
  getAllRoutesSuccess,
  setCurrentRoute,
  getNextPointStart,
  getNextPointFail,
  getNextPointSuccess
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
      allRoutes: [...payload ],
    };
  },
  [getAllRoutesFail]: (state) => {
    return {
      ...state,
      addedRouteInfo: null,
    };
  },
  [setCurrentRoute]: (state, {payload}) => {
    return {
      ...state,
      currentRoute: payload,
      currentPointIndex: 0
    }
  },
  [getNextPointStart]: (state) => {
    return {
      ...state
    }
  },
  [getNextPointFail]: (state, {payload}) => {
    return {
      ...state,
      currentPoint: {},
    }
  },
  [getNextPointSuccess]: (state, {payload}) => {
    return {
      ...state,
      currentPoint: {...payload},
      currentPointIndex: state.currentPointIndex + 1,
    }
  },


};

export const userRoutesReducer = handleActions(reducerMap, initialState);
