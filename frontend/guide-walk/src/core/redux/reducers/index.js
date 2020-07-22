import {homeReducer} from './home-reducer';
import {HOME_KEY} from '../constants';

const reducers = {[HOME_KEY]: homeReducer};

export const getReducers = () => ({...reducers});
