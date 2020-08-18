import { handleActions } from 'redux-actions';
import { getSearchDataFail, getSearchDataStart, getSearchDataSuccess } from '../actions';

const initialState = {
  searchData: null,
};

const reducerMap = {
  [getSearchDataStart]: (state) => {
    return {
      ...state,
    };
  },

  [getSearchDataSuccess]: (state, { payload }) => {
    return {
      ...state,
      searchData: [...payload],
    };
  },

  [getSearchDataFail]: (state) => {
    return {
      ...state,
      searchData: null,
    };
  },
};

export const searchDataReducer = handleActions(reducerMap, initialState);
