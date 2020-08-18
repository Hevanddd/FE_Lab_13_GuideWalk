import { createAction } from 'redux-actions';

export const getSearchDataStart = createAction('GET_SEARCH_DATA_START');
export const getSearchDataSuccess = createAction('GET_SEARCH_DATA_SUCCESS');
export const getSearchDataFail = createAction('GET_SEARCH_DATA_FAIL');
