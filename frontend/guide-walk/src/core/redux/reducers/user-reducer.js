import { handleActions } from 'redux-actions';
import {
  getUserInfoDataStart,
  getUserInfoDataFail,
  getUserInfoDataSuccess,
  refreshUserDataAuth,
  toggleSavedRouteStart,
  toggleSavedRouteFail,
  toggleRatingFail,
  toggleRatingStart,
  getUserSavedRoutesDataStart,
  getUserSavedRoutesDataSuccess,
  getUserSavedRoutesDataFail,
  getUserRoutesDataSuccess,
  getUserRoutesDataStart,
  getUserRoutesDataFail,
  getToggleSavedRouteInSavedRoutesPageStart,
  getToggleSavedRouteInMyRoutesPageStart,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageSuccess,
  getToggleRatingRouteInSavedRoutesPageSuccess,
  toggleSavedRouteSuccess,
} from '../actions';
import { filterRatingRoutes } from '../../../services/helpers';

const initialState = {
  userInfoData: null,
  userDataAuth: null,
  userSavedRouteData: null,
  userRoutesData: null,
};

const filterInfoDataSavedRoutes = (userInfoData, routeId) => {
  const { saved_routes } = userInfoData;
  const isIncludes = saved_routes.includes(routeId);

  if (isIncludes) {
    const index = saved_routes.findIndex(({ _id }) => _id === routeId);

    saved_routes.splice(index, 1);

    return { ...userInfoData };
  }

  saved_routes.push(routeId);

  return { ...userInfoData };
};

const reducerMap = {
  [getUserInfoDataStart]: (state) => {
    return {
      ...state,
    };
  },

  [getUserInfoDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      userInfoData: payload,
    };
  },

  [getUserInfoDataFail]: (state) => {
    return {
      ...state,
      userInfoData: [],
    };
  },

  [refreshUserDataAuth]: (state, { payload }) => {
    const userName = payload[`https://username`];
    return {
      ...state,
      userDataAuth: { ...payload, userName },
    };
  },

  [toggleSavedRouteStart]: (state) => {
    return {
      ...state,
    };
  },

  [toggleSavedRouteSuccess]: (state, { payload }) => {
    const userInfoData = state.userInfoData;
    return {
      ...state,
      userInfoData: userInfoData && filterInfoDataSavedRoutes(userInfoData, payload),
    };
  },

  [toggleSavedRouteFail]: (state) => {
    return {
      ...state,
    };
  },

  [toggleRatingStart]: (state) => {
    return {
      ...state,
    };
  },

  [toggleRatingFail]: (state) => {
    return {
      ...state,
    };
  },

  [getUserSavedRoutesDataStart]: (state) => {
    return {
      ...state,
    };
  },

  [getUserSavedRoutesDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      userSavedRouteData: payload.length > 0 ? payload : null,
    };
  },

  [getUserSavedRoutesDataFail]: (state) => {
    return {
      ...state,
      userSavedRouteData: null,
    };
  },

  [getUserRoutesDataStart]: (state) => {
    return {
      ...state,
    };
  },

  [getUserRoutesDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      userRoutesData: payload.length > 0 ? payload : null,
    };
  },

  [getUserRoutesDataFail]: (state) => {
    return {
      ...state,
      userRoutesData: null,
    };
  },

  [getToggleSavedRouteInSavedRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleSavedRouteInMyRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleSavedRouteInTopRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  //My Routes Page

  [getToggleRatingRouteInMyRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInMyRoutesPageSuccess]: (state, { payload }) => {
    const userRoutesData = state.userRoutesData;
    const { routeId, data } = payload;
    return {
      ...state,
      userRoutesData: userRoutesData && filterRatingRoutes(userRoutesData, { routeId, ...data }),
    };
  },

  //Saved Routes Page

  [getToggleRatingRouteInSavedRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInSavedRoutesPageSuccess]: (state, { payload }) => {
    const userSavedRoutesData = state.userSavedRouteData;
    const { routeId, data } = payload;
    return {
      ...state,
      userSavedRouteData: userSavedRoutesData && filterRatingRoutes(userSavedRoutesData, { routeId, ...data }),
    };
  },

  //Top Routes Page

  [getToggleRatingRouteInTopRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },
};

export const userReducer = handleActions(reducerMap, initialState);
