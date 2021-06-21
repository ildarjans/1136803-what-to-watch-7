import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer.js';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
