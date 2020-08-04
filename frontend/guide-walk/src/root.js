import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore } from './store';
import { ResourcesProvider } from '../src/services';

const store = getStore();

export const Root = ({ children }) => {
  return (
    <Provider store={store}>
      <ResourcesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ResourcesProvider>
    </Provider>
  );
};
