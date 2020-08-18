import { createSelector } from 'reselect';
import { SEARCH_DATA_KEY } from '../constants';

const getRouteData = (state) => state[SEARCH_DATA_KEY];

export const searchDataSelector = createSelector(getRouteData, (search) => search.searchData);
