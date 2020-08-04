import { homeReducer } from './home-reducer';
import { resourcesProviderReducer } from './resources-provider-reducer';
import { HOME_KEY, USER_KEY } from '../constants';

const reducers = { [HOME_KEY]: homeReducer, [USER_KEY]: resourcesProviderReducer };

export const getReducers = () => ({ ...reducers });
