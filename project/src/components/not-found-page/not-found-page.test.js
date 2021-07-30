import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page.jsx';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NotFoundPage/>
      </Router>,
    );

    expect(getByText('Page not Found')).toBeInTheDocument();
    expect(getByText('Go to main page')).toBeInTheDocument();

  });
});
