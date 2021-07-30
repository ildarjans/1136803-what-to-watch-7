import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import createApi from '../../services/api.js';
import FilmCardReviews from './film-card-reviews.jsx';

const api = createApi();

describe('Component: FilmCardReviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
    const store = configureFakeStore({
      REVIEWS: {
        waitingFetchResponse: false,
        waitingPostResponse: false,
        fetchErrorMessage: '',
        postErrorMessage: '',
        reviews: [
          {
            id: 1,
            user: {
              id: 9,
              name: 'Red John',
            },
            rating: 8.6,
            comment: 'However, juror Henry Fonda does not believe it to be as sure-fire as it appears.',
            date: '2021-07-25T15:22:11.594Z',
          },
          {
            id: 2,
            user: {
              id: 23,
              name: 'Billy Begins',
            },
            rating: 7.2,
            comment: 'This is his story of hi-jacking, stealing, cheating, killing and finally drug dealing.',
            date: '2021-07-24T20:20:20.594Z',
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardReviews id={'1'}/>
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('column-1')).toBeInTheDocument();
    expect(screen.getByTestId('column-2')).toBeInTheDocument();
    expect(screen.getByText('However, juror Henry Fonda does not believe it to be as sure-fire as it appears.')).toBeInTheDocument();
    expect(screen.getByText('This is his story of hi-jacking, stealing, cheating, killing and finally drug dealing.')).toBeInTheDocument();
  });
});
