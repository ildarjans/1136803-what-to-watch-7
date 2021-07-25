import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {getNodeText, render} from '@testing-library/react';
import AuthHeader from './auth-header.jsx';

describe('Component: AuthHeader', () => {

  it('Should render correctly if authorized user', () => {
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        }
      },
    });
    const history = createMemoryHistory();
    const { container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader/>
        </Router>
      </Provider>
    );
    const userAvatar = container.querySelector('.user-block__avatar > img');
    const userLink = container.querySelector('.user-block__link');

    expect(userLink).toHaveAttribute('href', '/');
    expect(userAvatar).toHaveAttribute('src', 'www.redjohn.com/img/avatar.jpg');
    expect(getNodeText(userLink)).toMatch(/sign out/i);
  });
  it('Should render correctly if authorized user', () => {
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
        user: {}
      },
    });
    const history = createMemoryHistory();
    const { container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader/>
        </Router>
      </Provider>
    );
    const userLink = container.querySelector('.user-block__link');

    expect(userLink).toHaveAttribute('href', '/login');
    expect(getNodeText(userLink)).toMatch(/sign in/i);
  });
  it('Should render correctly with children if authorized user', () => {
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        }
      },
    });
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <AuthHeader>
            <p>test child</p>
          </AuthHeader>
        </Router>
      </Provider>
    );

    expect(getByText('test child')).toBeInTheDocument();
  });
})
