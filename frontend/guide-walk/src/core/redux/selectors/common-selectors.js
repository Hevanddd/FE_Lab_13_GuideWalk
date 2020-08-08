import { createSelector } from 'reselect';
import { COMMON_KEY } from '../constants';

const getData = (state) => state[COMMON_KEY];

export const isLoadingSelector = createSelector(getData, (common) => common.isLoading);
