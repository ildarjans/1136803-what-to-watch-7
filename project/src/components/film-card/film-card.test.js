import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import FilmCard from './film-card.jsx';
import {Provider} from 'react-redux';

describe('Component: FilmCard', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
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
    const createFakeStore = configureStore();
    const store = createFakeStore({
      USER: {
        authorizationStatus: 'NO_AUTHORIZED',
        user: {},
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCard film={film}/>
        </Router>
      </Provider>,
    );
    expect(screen.getByText('WTW')).toBeInTheDocument();
    expect(screen.getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(screen.getByText('Comedy')).toBeInTheDocument();
    expect(screen.getByText('2014')).toBeInTheDocument();
  });
});
