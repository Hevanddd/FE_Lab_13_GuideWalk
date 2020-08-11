import { createSelector } from 'reselect';
import { USER_KEY } from '../constants';

const getData = (state) => state[USER_KEY];

export const userAuthDataSelector = createSelector(getData, (user) => user.userDataAuth);
export const userInfoDateSelector = createSelector(getData, (user) => user.userInfoData);
export const userSavedRoutesDataSelector = createSelector(getData, (user) => user.userSavedRouteData);
export const userRoutesDataSelector = createSelector(getData, (user) => user.userRoutesData);

export const userSavedRoadsIdListSelector = createSelector(userInfoDateSelector, (user) => user && user.saved_routes);
