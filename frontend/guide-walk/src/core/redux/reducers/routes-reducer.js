import { handleActions } from 'redux-actions';
import {
  getAddedRouteDataSuccess,
  getAddedRouteDataFail,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getAllRoutesFail,
  getAllRoutesSuccess,
  getNextRoutesStart,
  getNextRoutesSuccess,
  getNextRoutesFail,
  setCurrentRoute,
  setCurrentPoint,
  getNextPointStart,
  getNextPointFail,
  getNextPointSuccess,
  removeRouteFail,
  removeRouteStart,
  getToggleRatingRouteInTopRoutesPageSuccess,
  setCurrentRouteMarkersPositions,
} from '../actions';
import { filterRatingRoutes } from '../../../services/helpers';

const initialState = {
  addedRouteInfo: null,
  allRoutes: null,
  currentRouteMarkersPositions: null,
  isLoadingPagination: false,
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
      allRoutes: [...payload],
    };
  },

  [getAllRoutesFail]: (state) => {
    return {
      ...state,
      addedRouteInfo: null,
    };
  },

  [getNextRoutesStart]: (state) => {
    return {
      ...state,
      isLoadingPagination: true,
    };
  },

  [getNextRoutesSuccess]: (state, { payload }) => {
    return {
      ...state,
      allRoutes: [...state.allRoutes, ...payload],
      isLoadingPagination: false,
    };
  },

  [getNextRoutesFail]: (state) => {
    return {
      ...state,
      isLoadingPagination: false,
    };
  },

  [setCurrentRoute]: (state, { payload }) => {
    return {
      ...state,
      currentRoute: payload,
    };
  },

  [setCurrentPoint]: (state, { payload }) => {
    return {
      ...state,
      currentPoint: { ...payload },
    };
  },

  [getNextPointStart]: (state) => {
    return {
      ...state,
    };
  },

  [getNextPointFail]: (state) => {
    return {
      ...state,
      currentPoint: {},
    };
  },

  [getNextPointSuccess]: (state, { payload }) => {
    return {
      ...state,
      currentPoint: { ...payload.pointData, pointIndex: payload.pointIndex + 1 },
    };
  },

  [removeRouteStart]: (state) => {
    return {
      ...state,
    };
  },

  [removeRouteFail]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInTopRoutesPageSuccess]: (state, { payload }) => {
    const allRoutesData = state.allRoutes;
    const { routeId, data } = payload;
    return {
      ...state,
      allRoutes: allRoutesData && filterRatingRoutes(allRoutesData, { routeId, ...data }),
    };
  },

  [setCurrentRouteMarkersPositions]: (state, { payload }) => {
    return {
      ...state,
      currentRouteMarkersPositions: payload,
    };
  },
};

export const userRoutesReducer = handleActions(reducerMap, initialState);
