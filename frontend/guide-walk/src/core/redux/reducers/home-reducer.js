import { handleActions } from 'redux-actions';
import { getHomeUserDataStart, getHomeUserDataFail, getHomeUserDataSuccess } from '../actions';

const initialState = {
  isLoading: false,
  data: [],
};

const reducerMap = {
  [getHomeUserDataStart]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [getHomeUserDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      isLoading: true,
      data: [...payload],
    };
  },
  [getHomeUserDataFail]: (state) => {
    return {
      ...state,
      isLoading: false,
      data: [],
    };
  },
};

export const homeReducer = handleActions(reducerMap, initialState);
