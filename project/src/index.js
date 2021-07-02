import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {reducer} from './store/reducer.js';
import createAPI from './services/api.js';
import {checkAuthUser, fetchFavorites, fetchFilms} from './middleware/thunk-api.js';
import {redirect} from './middleware/redirect.js';
import {ActionCreator} from './store/action.js';
import {AuthStatus} from './const.js';

const api = createAPI(() => (
  store.dispatch(ActionCreator.setAuthorizationStatus(AuthStatus.NO_AUTHORIZED))),
);

const store = createStore(
  reducer,
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
