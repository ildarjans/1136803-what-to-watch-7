import React from 'react';
import {Router} from 'react-router-dom';
import {getNodeText, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import GenreList from './genre-list.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


describe('Component: GenreList', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const createFakeStore = configureStore();
    const store = createFakeStore({
      PROCESS: {currentGenre: 'All genres'},
      FILMS: {
        filmsByGenre: {'Drama': '', 'Comedy': '', 'Fantasy': '', 'Thriller': '', 'Crime': '', 'All genres': ''},
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <GenreList/>
        </Router>
      </Provider>,
    );

    const genreItems = container.querySelectorAll('[data-testid="genre-item"]');
    const activeGenreItem = container.querySelector('.catalog__genres-item--active');
    const activeGenreLink = activeGenreItem.querySelector('a');

    expect(genreItems.length).toEqual(6);
    expect(activeGenreItem).toBeInTheDocument();
    expect(getNodeText(activeGenreLink)).toEqual('All genres');
  });
});
