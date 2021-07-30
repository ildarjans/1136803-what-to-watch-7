import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import PrivateRoute from './private-route.jsx';

describe('Component: PrivateRoute', () => {
  const configureFakeStore = configureStore();
  const history = createMemoryHistory();
  history.push('/private');

  it('Should render correctly to authorization user', () => {
    const store = configureFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path={'/login'}><h1>Welcome to public route</h1></Route>
          <PrivateRoute render={() => (<h1>Welcome to private route</h1>)} path={'/private'} exact/>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('Welcome to private route')).toBeInTheDocument();
    expect(screen.queryByText('Welcome to public route')).not.toBeInTheDocument();
  });
  it('Should render correctly to guest user', () => {
    const store = configureFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path={'/login'}><h1>Welcome to public route</h1></Route>
          <PrivateRoute render={() => (<h1>Welcome to private route</h1>)} path={'/private'} exact/>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('Welcome to public route')).toBeInTheDocument();
    expect(screen.queryByText('Welcome to private route')).not.toBeInTheDocument();
  });
});
