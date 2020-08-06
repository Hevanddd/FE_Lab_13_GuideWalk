import { userReducer } from './user-reducer';
import { userRoutesReducer } from './routes-reducer';
import { coordinatesOfTheRouteReducer } from './get-coordinates';
import { USER_KEY, ROUTES_KEY, COORDINATES_KEY } from '../constants';

const reducers = {
  [USER_KEY]: userReducer,
  [ROUTES_KEY]: userRoutesReducer,
  [COORDINATES_KEY]: coordinatesOfTheRouteReducer,
};

export const getReducers = () => ({ ...reducers });
