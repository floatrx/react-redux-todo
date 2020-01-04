import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers/store';
import { Notification } from './vendor/notifications';

import { App } from './App';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Notification />
    <App title="React ToDo" />
  </Provider>,
  document.getElementById('root'),
);
