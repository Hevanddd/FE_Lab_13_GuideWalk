import { createAction } from 'redux-actions';
import { GET_HOME_USER_DATA_START, GET_HOME_USER_DATA_FAIL, GET_HOME_USER_DATA_SUCCESS } from '../constants';

export const getHomeUserDataStart = createAction(GET_HOME_USER_DATA_START);
export const getHomeUserDataSuccess = createAction(GET_HOME_USER_DATA_SUCCESS);
export const getHomeUserDataFail = createAction(GET_HOME_USER_DATA_FAIL);
