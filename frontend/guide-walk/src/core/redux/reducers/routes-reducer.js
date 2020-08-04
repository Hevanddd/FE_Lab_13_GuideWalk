import { handleActions } from 'redux-actions';
import { getAddedRouteDataSuccess, getAddedRouteDataFail, getAddedRouteDataStart } from '../actions';

const initialState = {
  addedRouteInfo: {},
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
};

export const userRoutesReducer = handleActions(reducerMap, initialState);
