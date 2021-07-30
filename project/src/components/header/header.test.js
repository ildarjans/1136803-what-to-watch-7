import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Header from './header.jsx';

describe('Component: Header', () => {
  it('Should render correctly without children', () => {
    const history = createMemoryHistory();
    const {container} = render(
      <Router history={history}>
        <Header className={'header-general'}/>
      </Router>,
    );
    const logo = container.querySelector('.logo');
    const header = container.querySelector('header');
    expect(logo).toBeInTheDocument();
    expect(header.classList.contains('header-general')).toBeTruthy();
  });
  it('Should render correctly with children', () => {
    const history = createMemoryHistory();
    const {getByText, container} = render(
      <Router history={history}>
        <Header className={'header-special'}>
          <p>test example</p>
        </Header>
      </Router>,
    );
    const logo = container.querySelector('.logo');
    const header = container.querySelector('header');
    expect(logo).toBeInTheDocument();
    expect(header.classList.contains('header-special')).toBeTruthy();
    expect(getByText('test example')).toBeInTheDocument();
  });
});
