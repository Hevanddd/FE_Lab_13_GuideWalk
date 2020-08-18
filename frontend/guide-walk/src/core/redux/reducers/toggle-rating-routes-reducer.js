import { handleActions } from 'redux-actions';
import {
  getToggleRatingRouteInMyRoutesPageSuccess,
  getToggleRatingRouteInMyRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageFail,
} from '../actions';

const initialState = {
  ratingRoutesData: null,
};

const reducerMap = {
  [getToggleRatingRouteInMyRoutesPageStart]: (state) => {
    return {
      ...state,
    };
  },

  [getToggleRatingRouteInMyRoutesPageSuccess]: (state, { payload }) => {
    return {
      ...state,
    };
  },
};

export const toggleRatingRoutesDataReducer = handleActions(reducerMap, initialState);
