import { userReducer } from './user-reducer';
import { userRoutesReducer } from './routes-reducer';
import { coordinatesOfTheRouteReducer } from './get-coordinates';
import { allRouteDataReducer } from './all-route-data';
import { USER_KEY, ROUTES_KEY, COORDINATES_KEY, ROUTE_DATA_KEY } from '../constants';

const reducers = {
  [USER_KEY]: userReducer,
  [ROUTES_KEY]: userRoutesReducer,
  [COORDINATES_KEY]: coordinatesOfTheRouteReducer,
  [ROUTE_DATA_KEY]: allRouteDataReducer,
};

export const getReducers = () => ({ ...reducers });
