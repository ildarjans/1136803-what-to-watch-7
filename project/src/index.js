import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer.js';
import createAPI from './services/api.js';
import {checkAuthUser, fetchFilms} from './middleware/thunk-api.js';
import {redirect} from './middleware/redirect.js';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {browserHistory} from './browser-history.js';

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


store.dispatch(checkAuthUser());
store.dispatch(fetchFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
