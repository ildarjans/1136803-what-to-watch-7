import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserPage from './user-page.jsx';

describe('Component: UserPage', () => {
  let history;
  let createFakeStore;
  beforeEach(() => {
    history = createMemoryHistory();
    createFakeStore = configureStore();
  });
  it('Should render correctly if guest user', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
        user: {},
      },
    });
    const {getByTestId} = render(
      <Provider store={store}>
        <Router history={history}>
          <UserPage/>
        </Router>
      </Provider>,
    );
    expect(getByTestId('sign-in')).toBeInTheDocument();
  });
  it('Should render correctly if authorized user', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {},
      },
    });
    const {queryByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <UserPage/>
        </Router>
      </Provider>,
    );
    expect(queryByText(/Sign in/i)).not.toBeInTheDocument();
  });
});
