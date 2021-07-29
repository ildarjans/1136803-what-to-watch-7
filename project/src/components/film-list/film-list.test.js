import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import FilmList from './film-list.jsx';

describe('Component: FilmList', () => {
  it('Should render correctly', () => {
    const films = [
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
    ];
    const history = createMemoryHistory();
    const {container} = render(
      <Router history={history}>
        <FilmList films={films}/>
      </Router>
    );
    const filmCards = container.querySelectorAll('[data-testid="small-card"]');
    expect(filmCards.length).toEqual(3);
  });
});
