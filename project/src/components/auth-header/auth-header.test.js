import React from 'react';
import {Router} from 'react-router-dom';
import * as Redux from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthHeader from './auth-header.jsx';
import {AppRoute} from '../../const.js';

describe('Component: AuthHeader', () => {
  let createFakeStore;
  const history = createMemoryHistory();
  beforeEach(() => {
    createFakeStore = configureStore();
  });
  it('Should render correctly if authorized user. Sing out action', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        },
      },
    });
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatch);
    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader/>
        </Router>
      </Provider>,
    );

    const userAvatarImg = screen.getByAltText(/user avatar/i);
    const singOutLink = screen.getByText(/sign out/i);

    expect(singOutLink).toBeInTheDocument();
    expect(singOutLink).toHaveAttribute('href', '/');
    expect(userAvatarImg).toHaveAttribute('src', 'www.redjohn.com/img/avatar.jpg');

    userEvent.click(singOutLink);
    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, expect.any(Function));

  });
  it('Should render correctly if authorized user. Redirect action', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        },
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader/>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByAltText(/user avatar/i));
    expect(history.location.pathname).toBe(AppRoute.FAVORITES);

  });
  it('Should render correctly if authorized user', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
        user: {},
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/sign in/i)).toHaveAttribute('href', '/login');
  });
  it('Should render correctly with children if authorized user', () => {
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        },
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader>
            <p>test child</p>
          </AuthHeader>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
