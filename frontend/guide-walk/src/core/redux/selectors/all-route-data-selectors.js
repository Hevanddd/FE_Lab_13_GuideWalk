import { createSelector } from 'reselect';
import { ROUTE_DATA_KEY } from '../constants';

const getData = (state) => state[ROUTE_DATA_KEY];

export const routeDataSelector = createSelector(getData, (allRouteData) => allRouteData.routeData);
