import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getByTestId, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import FilmCardFull from './film-card-full.jsx';

describe('Component: FilmCardFull', () => {
  it('Should render correctly then user authorized', () => {
    const film = {
      'id': '1',
      'title': 'The Grand Budapest Hotel',
      'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
      'backgroundColor': '#ffffff',
      'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'rating': 8.9,
      'scoresCount': 240,
      'director': 'Wes Andreson',
      'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      'runTime': 99,
      'genre': 'Comedy',
      'year': 2014,
      'isFavorite': false,
    };
    const history = createMemoryHistory();
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {},
      },
    })
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardFull authorizationStatus={'AUTHORIZED'} film={film}/>
        </Router>
      </Provider>
    );
    expect(getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(getByText('2014')).toBeInTheDocument();
    expect(getByText('Add review')).toBeInTheDocument();
    expect(getByTestId('bg-image')).toHaveAttribute('src', 'img/bg-the-grand-budapest-hotel.jpg');
    expect(getByTestId('poster-image')).toHaveAttribute('src', 'img/the-grand-budapest-hotel-poster.jpg');
  })
  it('Should render correctly then user is guest', () => {
    const film = {
      'id': '1',
      'title': 'The Grand Budapest Hotel',
      'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
      'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
      'backgroundColor': '#ffffff',
      'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
      'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'rating': 8.9,
      'scoresCount': 240,
      'director': 'Wes Andreson',
      'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      'runTime': 99,
      'genre': 'Comedy',
      'year': 2014,
      'isFavorite': false,
    };
    const history = createMemoryHistory();
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
        user: {},
      },
    })
    const {getByText, getByTestId, queryByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardFull authorizationStatus={'NO_AUTHORIZED'} film={film}/>
        </Router>
      </Provider>
    );
    expect(getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(getByText('2014')).toBeInTheDocument();
    expect(queryByText('Add review')).not.toBeInTheDocument();
    expect(getByTestId('bg-image')).toHaveAttribute('src', 'img/bg-the-grand-budapest-hotel.jpg');
    expect(getByTestId('poster-image')).toHaveAttribute('src', 'img/the-grand-budapest-hotel-poster.jpg');
  })
});
