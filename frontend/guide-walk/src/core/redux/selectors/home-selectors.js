import { createSelector } from 'reselect';
import { HOME_KEY } from '../constants';

const getData = (state) => state[HOME_KEY];

export const homeUserDataSelector = createSelector(getData, (home) => home.userData);
