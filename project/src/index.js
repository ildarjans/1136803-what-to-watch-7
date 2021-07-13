import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {rootReducer} from './store/root-reducer.js';
import createAPI from './services/api.js';
import {checkAuthUser, fetchFavorites, fetchFilms} from './middleware/thunk-api.js';
import {redirect} from './middleware/redirect.js';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

Promise.all([
  store.dispatch(checkAuthUser()),
  store.dispatch(fetchFilms()),
  store.dispatch(fetchFavorites()),
])
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </Provider>,
      document.getElementById('root'));
  });
