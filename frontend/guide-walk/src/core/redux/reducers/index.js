import { homeReducer } from './home-reducer';
import { resourcesProviderReducer } from './resources-provider-reducer';
import { HOME_KEY } from '../constants';

const reducers = { [HOME_KEY]: homeReducer, [HOME_KEY]: resourcesProviderReducer };

export const getReducers = () => ({ ...reducers });
