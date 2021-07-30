import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AddReviewButton from './add-review-button.jsx';

describe('Component: AddReviewButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, container} = render(
      <Router history={history}>
        <AddReviewButton id={'1'}/>
      </Router>,
    );
    const addButtonReviewLink = container.querySelector('.btn.film-card__button');
    expect(getByText('Add review')).toBeInTheDocument();
    expect(addButtonReviewLink).toHaveAttribute('href', '/film/1/review');
  });
});
