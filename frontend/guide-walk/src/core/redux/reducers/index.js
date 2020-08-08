import { userReducer } from './user-reducer';
import { userRoutesReducer } from './routes-reducer';
import { coordinatesOfTheRouteReducer } from './get-coordinates-reducer';
import { allRouteDataReducer } from './all-route-data-reducer';
import { commonReducer } from './common-reducer';
import { USER_KEY, ROUTES_KEY, COORDINATES_KEY, ROUTE_DATA_KEY, COMMON_KEY } from '../constants';

const reducers = {
  [USER_KEY]: userReducer,
  [ROUTES_KEY]: userRoutesReducer,
  [COORDINATES_KEY]: coordinatesOfTheRouteReducer,
  [ROUTE_DATA_KEY]: allRouteDataReducer,
  [COMMON_KEY]: commonReducer,
};

export const getReducers = () => ({ ...reducers });
