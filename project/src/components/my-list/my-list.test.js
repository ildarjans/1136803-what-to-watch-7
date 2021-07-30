import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import createAPI from '../../services/api.js';
import MyList from './my-list.jsx';

const api = createAPI();

describe('Component: MyList', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
    const store = configureFakeStore({
      FAVORITES: {
        favoritesList: [
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
        },
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MyList/>
        </Router>
      </Provider>,
    );
    expect(screen.queryAllByText(/my list/i).length).toBe(2);
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();

  });
});
