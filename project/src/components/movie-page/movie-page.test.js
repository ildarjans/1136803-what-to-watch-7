import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MoviePage from './movie-page.jsx';
import {Route, Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import createAPI from '../../services/api.js';
import {AppRoute} from '../../const.js';

const api = createAPI();

describe('Component: MoviePage', () => {
  it('Should render correctly, for existing Film', () => {
    const history = createMemoryHistory();
    const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
    const store = configureFakeStore({
      FILMS: {
        filmsByGenre: {
          'All genres': [
            {
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
            },
            {
              'id': '2',
              'title': 'Fantastic Beasts: The Crimes of Grindelwald',
              'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
              'backgroundColor': '#ffffff',
              'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
              'rating': 7.8,
              'scoresCount': 250,
              'director': 'Tom Hiddleston',
              'starring': ['Owen Wilson', 'Anya Taylor-Joy', 'Baek Da-eun', 'Quentin Tarantino'],
              'runTime': 99,
              'genre': 'Dramas',
              'year': 2016,
              'isFavorite': false,
            },
            {
              'id': '3',
              'title': 'Macbeth',
              'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
              'backgroundColor': '#ffffff',
              'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel\'s Inferno is a captivating and wildly passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible--forgiveness and love.',
              'rating': 8.2,
              'scoresCount': 260,
              'director': 'Owen Wilson',
              'starring': ['Alexandra Daddario', 'Mark Wahlberg', 'Stefania LaVie Owen', 'Brad Pitt', 'Henry Cavill'],
              'runTime': 99,
              'genre': 'Dramas',
              'year': 2012,
              'isFavorite': false,
            },
            {
              'id': '4',
              'title': 'Orlando',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
              'backgroundColor': '#D8D3BD',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
              'rating': 2.6,
              'scoresCount': 12292,
              'director': 'Sally Potter',
              'starring': [
                'Tilda Swinton',
                'Billy Zane',
                'Quentin Crisp'
              ],
              'runTime': 94,
              'genre': 'Drama',
              'year': 1992,
              'isFavorite': false
            }
          ],
          'Dramas': [
            {
              'id': '2',
              'title': 'Fantastic Beasts: The Crimes of Grindelwald',
              'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
              'backgroundColor': '#ffffff',
              'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
              'rating': 7.8,
              'scoresCount': 250,
              'director': 'Tom Hiddleston',
              'starring': ['Owen Wilson', 'Anya Taylor-Joy', 'Baek Da-eun', 'Quentin Tarantino'],
              'runTime': 99,
              'genre': 'Dramas',
              'year': 2016,
              'isFavorite': false,
            },
            {
              'id': '3',
              'title': 'Macbeth',
              'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
              'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
              'backgroundColor': '#ffffff',
              'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel\'s Inferno is a captivating and wildly passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible--forgiveness and love.',
              'rating': 8.2,
              'scoresCount': 260,
              'director': 'Owen Wilson',
              'starring': ['Alexandra Daddario', 'Mark Wahlberg', 'Stefania LaVie Owen', 'Brad Pitt', 'Henry Cavill'],
              'runTime': 99,
              'genre': 'Dramas',
              'year': 2012,
              'isFavorite': false,
            },
            {
              'id': '4',
              'title': 'Orlando',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
              'backgroundColor': '#D8D3BD',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
              'rating': 2.6,
              'scoresCount': 12292,
              'director': 'Sally Potter',
              'starring': [
                'Tilda Swinton',
                'Billy Zane',
                'Quentin Crisp'
              ],
              'runTime': 94,
              'genre': 'Drama',
              'year': 1992,
              'isFavorite': false
            }
          ],
          'Comedy': [
            {
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
            },
          ],
        },
        filmsList: {
          1: {
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
          },
          2: {
            'id': '2',
            'title': 'Fantastic Beasts: The Crimes of Grindelwald',
            'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
            'backgroundColor': '#ffffff',
            'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
            'rating': 7.8,
            'scoresCount': 250,
            'director': 'Tom Hiddleston',
            'starring': ['Owen Wilson', 'Anya Taylor-Joy', 'Baek Da-eun', 'Quentin Tarantino'],
            'runTime': 99,
            'genre': 'Dramas',
            'year': 2016,
            'isFavorite': false,
          },
          3: {
            'id': '3',
            'title': 'Macbeth',
            'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
            'backgroundColor': '#ffffff',
            'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel\'s Inferno is a captivating and wildly passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible--forgiveness and love.',
            'rating': 8.2,
            'scoresCount': 260,
            'director': 'Owen Wilson',
            'starring': ['Alexandra Daddario', 'Mark Wahlberg', 'Stefania LaVie Owen', 'Brad Pitt', 'Henry Cavill'],
            'runTime': 99,
            'genre': 'Dramas',
            'year': 2012,
            'isFavorite': false,
          },
          4: {
            'id': '4',
            'title': 'Orlando',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
            'backgroundColor': '#D8D3BD',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
            'rating': 2.6,
            'scoresCount': 12292,
            'director': 'Sally Potter',
            'starring': [
              'Tilda Swinton',
              'Billy Zane',
              'Quentin Crisp'
            ],
            'runTime': 94,
            'genre': 'Drama',
            'year': 1992,
            'isFavorite': false
          }
        },
        waitingResponse: false,
        errorMessage: '',
      },
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        }
      },
      SIMILAR_FILMS: {
        waitingResponse: false,
        errorMessage: '',
        similarFilms: [
          {
            'id': '2',
            'title': 'Fantastic Beasts: The Crimes of Grindelwald',
            'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
            'backgroundColor': '#ffffff',
            'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
            'rating': 7.8,
            'scoresCount': 250,
            'director': 'Tom Hiddleston',
            'starring': ['Owen Wilson', 'Anya Taylor-Joy', 'Baek Da-eun', 'Quentin Tarantino'],
            'runTime': 99,
            'genre': 'Dramas',
            'year': 2016,
            'isFavorite': false,
          },
          {
            'id': '3',
            'title': 'Macbeth',
            'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
            'backgroundColor': '#ffffff',
            'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel\'s Inferno is a captivating and wildly passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible--forgiveness and love.',
            'rating': 8.2,
            'scoresCount': 260,
            'director': 'Owen Wilson',
            'starring': ['Alexandra Daddario', 'Mark Wahlberg', 'Stefania LaVie Owen', 'Brad Pitt', 'Henry Cavill'],
            'runTime': 99,
            'genre': 'Dramas',
            'year': 2012,
            'isFavorite': false,
          },
        ],
      }
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.FILM} component={MoviePage}/>
          <MoviePage/>
        </Router>
      </Provider>
    );
    history.push('/film/1');
    expect(screen.getByTestId('film-card-full')).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();
    expect(screen.getByText('Macbeth')).toBeInTheDocument();

  });
  it('Should render correctly, for un found Film', () => {
    const history = createMemoryHistory();
    const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
    const store = configureFakeStore({
      FILMS: {
        filmsByGenre: {
          'All genres': [
            {
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
            },],
          'Comedy': [
            {
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
            },
          ],
        },
        filmsList: {
          1: {
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
          },
        },
        waitingResponse: false,
        errorMessage: '',
      },
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        }
      },
      SIMILAR_FILMS: {
        waitingResponse: false,
        errorMessage: '',
        similarFilms: [
          {
            'id': '2',
            'title': 'Fantastic Beasts: The Crimes of Grindelwald',
            'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'previewImage': 'img/the-grand-budapest-hotel-poster.jpg',
            'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
            'backgroundColor': '#ffffff',
            'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
            'rating': 7.8,
            'scoresCount': 250,
            'director': 'Tom Hiddleston',
            'starring': ['Owen Wilson', 'Anya Taylor-Joy', 'Baek Da-eun', 'Quentin Tarantino'],
            'runTime': 99,
            'genre': 'Dramas',
            'year': 2016,
            'isFavorite': false,
          },
        ],
      }
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.FILM} component={MoviePage}/>
          <MoviePage/>
        </Router>
      </Provider>
    );
    history.push('/film/69');
    expect(screen.getByTestId('film-card-full')).not.toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).not.toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).not.toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
