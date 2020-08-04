import { handleActions } from 'redux-actions';
import { getHomeUserDataStart, getHomeUserDataFail, getHomeUserDataSuccess } from '../actions';

const initialState = {
  data: null,
};

const reducerMap = {
  [getHomeUserDataStart]: (state) => {
    return {
      ...state,
    };
  },
  [getHomeUserDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      data: payload,
    };
  },
  [getHomeUserDataFail]: (state) => {
    return {
      ...state,
      data: [],
    };
  },
};

export const homeReducer = handleActions(reducerMap, initialState);
