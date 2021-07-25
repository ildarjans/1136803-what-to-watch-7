import {render} from '@testing-library/react';
import FilmReview from './film-review.jsx';

describe('Component: FilmReview', () => {
  it('Should render correctly', () => {
    const comment = 'However, juror Henry Fonda does not believe it to be as sure-fire as it appears.';
    const review = {
      id: 1,
      user: {
        id: 9,
        name: 'Red John',
      },
      rating: 8.6,
      comment,
      date: '2021-07-25T15:22:11.594Z',
    };

    const {getByText} = render(
      <FilmReview review={review}/>
    );
    expect(getByText(comment)).toBeInTheDocument();
    expect(getByText('Red John')).toBeInTheDocument();
    expect(getByText('July 25, 2021')).toBeInTheDocument();
    expect(getByText('8.6')).toBeInTheDocument();
  });
});
