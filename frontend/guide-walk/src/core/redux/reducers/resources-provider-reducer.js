import { handleActions } from 'redux-actions';
import { refreshUserData } from '../actions';

const initialState = {
  userData: [],
};

const reducerMap = {
  [refreshUserData]: (state, { payload }) => {
    const userName = payload[`https://username`];
    return {
      ...state,
      userData: { ...payload, userName },
    };
  },
};

export const resourcesProviderReducer = handleActions(reducerMap, initialState);
