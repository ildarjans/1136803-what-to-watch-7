import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {rootReducer} from './store/root-reducer.js';
import createAPI from './services/api.js';
import {checkAuthUser, fetchFavorites, fetchFilms} from './middleware/thunk-api.js';
import {redirect} from './middleware/redirect.js';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

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
