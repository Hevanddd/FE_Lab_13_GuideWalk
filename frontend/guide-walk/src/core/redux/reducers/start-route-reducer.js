import { handleActions } from 'redux-actions';
import { startRoute } from '../actions';

const initialState = {
  startedRoute: false,
};

const reducerMap = {
  [startRoute]: (state) => {
    return {
      ...state,
      startedRoute: true,
    };
  }
};

export const startRouteReducer = handleActions(reducerMap, initialState);
