import { handleActions } from 'redux-actions';
import { loadingStart, loadingStop } from '../actions';

const initialState = {
  isLoading: false,
};

const reducerMap = {
  [loadingStart]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [loadingStop]: (state) => {
    return {
      ...state,
      isLoading: false,
    };
  },
};

export const commonReducer = handleActions(reducerMap, initialState);
