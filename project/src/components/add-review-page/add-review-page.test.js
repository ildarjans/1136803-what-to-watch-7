import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import AddReviewPage from './add-review-page.jsx';
import {AppRoute} from '../../const.js';

describe('Component: AddReviewPage', () => {
  const configureFakeStore = configureStore();
  const history = createMemoryHistory();

  it('Should render correctly', () => {
    const store = configureFakeStore({
      FILMS: {
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
        },
        waitingResponse: false,
        errorMessage: '',
      },
      REVIEWS: {
        waitingFetchResponse: false,
        waitingPostResponse: false,
        fetchErrorMessage: '',
        postErrorMessage: '',
        reviews: [],
      },
      USER: {
        authorizationStatus: 'AUTHORIZED',
        user: {
          id: '1',
          email: 'example@hotmail.com',
          name: 'Red John',
          avatarUrl: 'www.redjohn.com/img/avatar.jpg',
          token: '00faf9901',
        },
      }
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.REVIEW} component={AddReviewPage}/>
        </Router>
      </Provider>
    );

    history.push('/film/1/review');

    expect(screen.getByText('WTW')).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    expect(screen.getByTestId('film-link')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-link')).toBeInTheDocument();
  });
});
