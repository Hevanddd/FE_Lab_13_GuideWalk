import { userReducer } from './user-reducer';
import { userRoutesReducer } from './routes-reducer';
import { USER_KEY, ROUTES_KEY } from '../constants';

const reducers = { [USER_KEY]: userReducer, [ROUTES_KEY]: userRoutesReducer };

export const getReducers = () => ({ ...reducers });
