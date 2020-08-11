import { createSelector } from 'reselect';
import { ROUTES_KEY } from '../constants';

const getRouteData = (state) => state[ROUTES_KEY];

export const userRoutesSelector = createSelector(getRouteData, (routes) => routes.addedRouteInfo);
export const allRoutesSelector = createSelector(getRouteData, (routes) => routes.allRoutes);

export const currentRouteSelector = createSelector(getRouteData, (routes) => routes.currentRoute);
export const currentPointDataSelector = createSelector(getRouteData, (routes) => routes.currentPoint);
