import { createSelector } from 'reselect';
import { USER_KEY } from '../constants';

const getData = (state) => state[USER_KEY];

export const homeUserDataSelector = createSelector(getData, (user) => user.userData);
