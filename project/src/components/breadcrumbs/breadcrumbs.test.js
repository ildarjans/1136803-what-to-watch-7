import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import Breadcrumbs from './breadcrumbs.jsx';

describe('Component: Breadcrumbs', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, getByTestId} = render(
      <Router history={history}>
        <Breadcrumbs id={'1'} title={'Snatch'}/>
      </Router>,
    );

    expect(getByText('Snatch')).toBeInTheDocument();
    expect(getByText('Add review')).toBeInTheDocument();
    expect(getByTestId('film-link')).toHaveAttribute('href', '/film/1');
    expect(getByTestId('add-review-link')).toHaveAttribute('href', '/film/1/review');
  });
});
