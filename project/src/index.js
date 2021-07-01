import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer.js';
import thunk from 'redux-thunk';
import createAPI from './services/api.js';
import {fetchFilms} from './middleware/thunk-api.js';

const api = createAPI(() => {
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

Promise
  .resolve(store.dispatch(fetchFilms()))
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </Provider>,
      document.getElementById('root'));
  });
