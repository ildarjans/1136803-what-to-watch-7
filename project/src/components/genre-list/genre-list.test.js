import {Router} from 'react-router-dom';
import {getByText, getNodeText, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import GenreList from './genre-list.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

let store;
let history;
let fakeApp;

describe('Component: GenreList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const createFakeStore = configureStore();
    store = createFakeStore({
      PROCESS: {currentGenre: 'All genres'},
      FILMS: {
        filmsByGenre: {'Drama': '', 'Comedy': '', 'Fantasy': '', 'Thriller': '', 'Crime': '', 'All genres': ''}
      }
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <GenreList/>
        </Router>
      </Provider>
    );
  });

  it('Should render correctly', () => {
    const {container} = render(fakeApp);
    const genreItems = container.querySelectorAll('li');
    const activeGenreItem = container.querySelector('.catalog__genres-item--active');
    const activeGenreLink = container.querySelector('.catalog__genres-item--active > a');

    expect(genreItems.length).toEqual(6);
    expect(activeGenreItem).toBeInTheDocument();
    expect(getNodeText(activeGenreLink)).toEqual('All genres');
  });
});
