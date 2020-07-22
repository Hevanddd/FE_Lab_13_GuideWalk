import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {getReducers} from './core/redux/reducers';
import {rootSagas} from './core/sagas';

const initialState = {};

const enhancerList = [];
// eslint-disable-next-line no-underscore-dangle
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    combineReducers(getReducers()),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancerList)
  );
  sagaMiddleware.run(rootSagas);
  return store;
};
