import { handleActions } from 'redux-actions';
import { getUserInfoDataStart, getUserInfoDataFail, getUserInfoDataSuccess, refreshUserDataAuth } from '../actions';

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
};

export const userReducer = handleActions(reducerMap, initialState);
