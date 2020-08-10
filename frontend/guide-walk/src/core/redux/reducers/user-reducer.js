import { handleActions } from 'redux-actions';
import {
  getUserInfoDataStart,
  getUserInfoDataFail,
  getUserInfoDataSuccess,
  refreshUserDataAuth,
  addSavedRouteStart,
  addSavedRouteFail,
  removeSavedRouteFail,
  removeSavedRouteStart,
} from '../actions';

const initialState = {
  userInfoData: null,
  userDataAuth: null,
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
  [addSavedRouteStart]: (state) => {
    return {
      ...state,
    };
  },

  [addSavedRouteFail]: (state) => {
    return {
      ...state,
    };
  },
  [removeSavedRouteStart]: (state) => {
    return {
      ...state,
    };
  },

  [removeSavedRouteFail]: (state) => {
    return {
      ...state,
    };
  },
};

export const userReducer = handleActions(reducerMap, initialState);
