import { createSelector } from 'reselect';
import { ROUTES_KEY } from '../constants';

const getData = (state) => state[ROUTES_KEY];

export const userRoutesSelector = createSelector(getData, (routes) => routes.addedRouteInfo);
export const allRoutesSelector = createSelector(getData, (routes) => routes.allRoutes);
