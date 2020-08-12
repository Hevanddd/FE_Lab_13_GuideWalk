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
} from '../actions';

const initialState = {
  userInfoData: null,
  userDataAuth: null,
  userSavedRouteData: null,
  userRoutesData: null,
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

  [getToggleRatingRouteInMyRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInSavedRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInTopRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },
};

export const userReducer = handleActions(reducerMap, initialState);
