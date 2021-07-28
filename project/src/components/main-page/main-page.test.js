import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import createAPI from '../../services/api.js';
import MainPage from './main-page.jsx';
import userEvent from '@testing-library/user-event';

const api = createAPI();

describe('Component: MainPage', () => {
  it('Should render correctly. Films short list', () => {
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
        },
        promoFilm: {
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
        waitingResponse: false,
        errorMessage: '',
      },
      PROCESS: {
        currentGenre: 'All genres',
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
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage/>
        </Router>
      </Provider>
    );

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.queryAllByText('The Grand Budapest Hotel').length).toBe(2);
    expect(screen.queryByText('Show more')).not.toBeInTheDocument();
  })
  it('Should render correctly. Films long list', () => {
    const history = createMemoryHistory();
    const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
    const store = configureFakeStore({
      FILMS: {
        filmsByGenre: {
          'All genres': [
            {
              'id': '1',
              'title': 'Bronson',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/bronson.jpg',
              'backgroundColor': '#73B39A',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
              'rating': 3.6,
              'scoresCount': 109661,
              'director': 'Nicolas Winding Refn',
              'starring': [
                'Tom Hardy',
                'Kelly Adams',
                'Luing Andrews'
              ],
              'runTime': 92,
              'genre': 'Action',
              'year': 2008,
              'isFavorite': false
            },
            {
              'id': '2',
              'title': 'Johnny English',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Johnny_English.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/johnny-english.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Johnny_English.jpg',
              'backgroundColor': '#F0DBA2',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
              'rating': 10,
              'scoresCount': 136843,
              'director': 'Peter Howitt',
              'starring': [
                'Rowan Atkinson',
                'John Malkovich',
                'Natalie Imbruglia'
              ],
              'runTime': 88,
              'genre': 'Comedy',
              'year': 2003,
              'isFavorite': false
            },
            {
              'id': '3',
              'title': 'Fantastic Beasts: The Crimes of Grindelwald',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
              'backgroundColor': '#B6A99F',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
              'rating': 3.4,
              'scoresCount': 160757,
              'director': 'David Yates',
              'starring': [
                'Eddie Redmayne',
                'Katherine Waterston',
                'Dan Fogler'
              ],
              'runTime': 134,
              'genre': 'Fantasy',
              'year': 2018,
              'isFavorite': false
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
            },
            {
              'id': '5',
              'title': 'Dardjeeling Limited',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
              'backgroundColor': '#AD9F8B',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
              'rating': 3.6,
              'scoresCount': 165106,
              'director': 'Wes Anderson',
              'starring': [
                'Owen Wilson',
                'Adrien Brody',
                'Jason Schwartzman'
              ],
              'runTime': 91,
              'genre': 'Adventure',
              'year': 2007,
              'isFavorite': false
            },
            {
              'id': '6',
              'title': 'What We Do in the Shadows',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
              'backgroundColor': '#A39E81',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
              'rating': 7.2,
              'scoresCount': 6173,
              'director': 'Jemaine Clement',
              'starring': [
                'Kayvan Novak',
                'Matt Berry',
                'Natasia Demetriou'
              ],
              'runTime': 30,
              'genre': 'Comedy',
              'year': 2019,
              'isFavorite': false
            },
            {
              'id': '7',
              'title': 'Midnight Special',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Midnight_Special.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/midnight-special.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Midnight_Special.jpg',
              'backgroundColor': '#828585',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
              'rating': 3.3,
              'scoresCount': 67815,
              'director': 'Jeff Nichols',
              'starring': [
                'Michael Shannon',
                'Joel Edgerton',
                'Kirsten Dunst '
              ],
              'runTime': 112,
              'genre': 'Action',
              'year': 2016,
              'isFavorite': false
            },
            {
              'id': '8',
              'title': 'Beach',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/beach.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/beach.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/beach.jpg',
              'backgroundColor': '#EBC996',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
              'rating': 3.3,
              'scoresCount': 207824,
              'director': 'Danny Boyle',
              'starring': [
                'Leonardo DiCaprio',
                'Daniel York',
                'Patcharawan Patarakijjanon'
              ],
              'runTime': 119,
              'genre': 'Adventure',
              'year': 2000,
              'isFavorite': false
            },
            {
              'id': '9',
              'title': 'We need to talk about Kevin',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
              'backgroundColor': '#E1DFDE',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
              'rating': 3.8,
              'scoresCount': 123240,
              'director': 'Lynne Ramsay',
              'starring': [
                'Tilda Swinton',
                'John C. Reilly',
                'Ezra Miller'
              ],
              'runTime': 112,
              'genre': 'Drama',
              'year': 2011,
              'isFavorite': false
            },
            {
              'id': '10',
              'title': 'Matrix',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/matrix.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/matrix.jpg',
              'backgroundColor': '#B9B27E',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
              'rating': 4.4,
              'scoresCount': 1503092,
              'director': 'Wachowski Brothers',
              'starring': [
                'Keanu Reeves',
                'Laurence Fishburne',
                'Carrie-Anne Moss'
              ],
              'runTime': 136,
              'genre': 'Action',
              'year': 1999,
              'isFavorite': false
            }
          ],
          'Action': [
            {
              'id': '1',
              'title': 'Bronson',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/bronson.jpg',
              'backgroundColor': '#73B39A',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
              'rating': 3.6,
              'scoresCount': 109661,
              'director': 'Nicolas Winding Refn',
              'starring': [
                'Tom Hardy',
                'Kelly Adams',
                'Luing Andrews'
              ],
              'runTime': 92,
              'genre': 'Action',
              'year': 2008,
              'isFavorite': false
            },
            {
              'id': '7',
              'title': 'Midnight Special',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Midnight_Special.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/midnight-special.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Midnight_Special.jpg',
              'backgroundColor': '#828585',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
              'rating': 3.3,
              'scoresCount': 67815,
              'director': 'Jeff Nichols',
              'starring': [
                'Michael Shannon',
                'Joel Edgerton',
                'Kirsten Dunst '
              ],
              'runTime': 112,
              'genre': 'Action',
              'year': 2016,
              'isFavorite': false
            },
            {
              'id': '10',
              'title': 'Matrix',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/matrix.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/matrix.jpg',
              'backgroundColor': '#B9B27E',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
              'rating': 4.4,
              'scoresCount': 1503092,
              'director': 'Wachowski Brothers',
              'starring': [
                'Keanu Reeves',
                'Laurence Fishburne',
                'Carrie-Anne Moss'
              ],
              'runTime': 136,
              'genre': 'Action',
              'year': 1999,
              'isFavorite': false
            }
          ],
          'Comedy': [
            {
              'id': '2',
              'title': 'Johnny English',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Johnny_English.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/johnny-english.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Johnny_English.jpg',
              'backgroundColor': '#F0DBA2',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
              'rating': 10,
              'scoresCount': 136843,
              'director': 'Peter Howitt',
              'starring': [
                'Rowan Atkinson',
                'John Malkovich',
                'Natalie Imbruglia'
              ],
              'runTime': 88,
              'genre': 'Comedy',
              'year': 2003,
              'isFavorite': false
            },
            {
              'id': '6',
              'title': 'What We Do in the Shadows',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
              'backgroundColor': '#A39E81',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
              'rating': 7.2,
              'scoresCount': 6173,
              'director': 'Jemaine Clement',
              'starring': [
                'Kayvan Novak',
                'Matt Berry',
                'Natasia Demetriou'
              ],
              'runTime': 30,
              'genre': 'Comedy',
              'year': 2019,
              'isFavorite': false
            }
          ],
          'Fantasy': [
            {
              'id': '3',
              'title': 'Fantastic Beasts: The Crimes of Grindelwald',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
              'backgroundColor': '#B6A99F',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
              'rating': 3.4,
              'scoresCount': 160757,
              'director': 'David Yates',
              'starring': [
                'Eddie Redmayne',
                'Katherine Waterston',
                'Dan Fogler'
              ],
              'runTime': 134,
              'genre': 'Fantasy',
              'year': 2018,
              'isFavorite': false
            }
          ],
          'Drama': [
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
            },
            {
              'id': '9',
              'title': 'We need to talk about Kevin',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
              'backgroundColor': '#E1DFDE',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
              'description': 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
              'rating': 3.8,
              'scoresCount': 123240,
              'director': 'Lynne Ramsay',
              'starring': [
                'Tilda Swinton',
                'John C. Reilly',
                'Ezra Miller'
              ],
              'runTime': 112,
              'genre': 'Drama',
              'year': 2011,
              'isFavorite': false
            }
          ],
          'Adventure': [
            {
              'id': '5',
              'title': 'Dardjeeling Limited',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
              'backgroundColor': '#AD9F8B',
              'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
              'rating': 3.6,
              'scoresCount': 165106,
              'director': 'Wes Anderson',
              'starring': [
                'Owen Wilson',
                'Adrien Brody',
                'Jason Schwartzman'
              ],
              'runTime': 91,
              'genre': 'Adventure',
              'year': 2007,
              'isFavorite': false
            },
            {
              'id': '8',
              'title': 'Beach',
              'posterImage': 'https://7.react.pages.academy/static/film/poster/beach.jpg',
              'previewImage': 'https://7.react.pages.academy/static/film/preview/beach.jpg',
              'backgroundImage': 'https://7.react.pages.academy/static/film/background/beach.jpg',
              'backgroundColor': '#EBC996',
              'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
              'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
              'description': 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
              'rating': 3.3,
              'scoresCount': 207824,
              'director': 'Danny Boyle',
              'starring': [
                'Leonardo DiCaprio',
                'Daniel York',
                'Patcharawan Patarakijjanon'
              ],
              'runTime': 119,
              'genre': 'Adventure',
              'year': 2000,
              'isFavorite': false
            }
          ]
        },
        filmsList: {
          1: {
            'id': '1',
            'title': 'Bronson',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/bronson.jpg',
            'backgroundColor': '#73B39A',
            'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
            'rating': 3.6,
            'scoresCount': 109661,
            'director': 'Nicolas Winding Refn',
            'starring': [
              'Tom Hardy',
              'Kelly Adams',
              'Luing Andrews'
            ],
            'runTime': 92,
            'genre': 'Action',
            'year': 2008,
            'isFavorite': false
          },
          2: {
            'id': '2',
            'title': 'Johnny English',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/Johnny_English.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/johnny-english.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/Johnny_English.jpg',
            'backgroundColor': '#F0DBA2',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
            'rating': 10,
            'scoresCount': 136843,
            'director': 'Peter Howitt',
            'starring': [
              'Rowan Atkinson',
              'John Malkovich',
              'Natalie Imbruglia'
            ],
            'runTime': 88,
            'genre': 'Comedy',
            'year': 2003,
            'isFavorite': false
          },
          3: {
            'id': '3',
            'title': 'Fantastic Beasts: The Crimes of Grindelwald',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
            'backgroundColor': '#B6A99F',
            'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
            'rating': 3.4,
            'scoresCount': 160757,
            'director': 'David Yates',
            'starring': [
              'Eddie Redmayne',
              'Katherine Waterston',
              'Dan Fogler'
            ],
            'runTime': 134,
            'genre': 'Fantasy',
            'year': 2018,
            'isFavorite': false
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
          },
          5: {
            'id': '5',
            'title': 'Dardjeeling Limited',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
            'backgroundColor': '#AD9F8B',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'description': 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
            'rating': 3.6,
            'scoresCount': 165106,
            'director': 'Wes Anderson',
            'starring': [
              'Owen Wilson',
              'Adrien Brody',
              'Jason Schwartzman'
            ],
            'runTime': 91,
            'genre': 'Adventure',
            'year': 2007,
            'isFavorite': false
          },
          6: {
            'id': '6',
            'title': 'What We Do in the Shadows',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
            'backgroundColor': '#A39E81',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
            'rating': 7.2,
            'scoresCount': 6173,
            'director': 'Jemaine Clement',
            'starring': [
              'Kayvan Novak',
              'Matt Berry',
              'Natasia Demetriou'
            ],
            'runTime': 30,
            'genre': 'Comedy',
            'year': 2019,
            'isFavorite': false
          },
          7: {
            'id': '7',
            'title': 'Midnight Special',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/Midnight_Special.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/midnight-special.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/Midnight_Special.jpg',
            'backgroundColor': '#828585',
            'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
            'rating': 3.3,
            'scoresCount': 67815,
            'director': 'Jeff Nichols',
            'starring': [
              'Michael Shannon',
              'Joel Edgerton',
              'Kirsten Dunst '
            ],
            'runTime': 112,
            'genre': 'Action',
            'year': 2016,
            'isFavorite': false
          },
          8: {
            'id': '8',
            'title': 'Beach',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/beach.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/beach.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/beach.jpg',
            'backgroundColor': '#EBC996',
            'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
            'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
            'description': 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
            'rating': 3.3,
            'scoresCount': 207824,
            'director': 'Danny Boyle',
            'starring': [
              'Leonardo DiCaprio',
              'Daniel York',
              'Patcharawan Patarakijjanon'
            ],
            'runTime': 119,
            'genre': 'Adventure',
            'year': 2000,
            'isFavorite': false
          },
          9: {
            'id': '9',
            'title': 'We need to talk about Kevin',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
            'backgroundColor': '#E1DFDE',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
            'rating': 3.8,
            'scoresCount': 123240,
            'director': 'Lynne Ramsay',
            'starring': [
              'Tilda Swinton',
              'John C. Reilly',
              'Ezra Miller'
            ],
            'runTime': 112,
            'genre': 'Drama',
            'year': 2011,
            'isFavorite': false
          },
          10: {
            'id': '10',
            'title': 'Matrix',
            'posterImage': 'https://7.react.pages.academy/static/film/poster/matrix.jpg',
            'previewImage': 'https://7.react.pages.academy/static/film/preview/matrix.jpg',
            'backgroundImage': 'https://7.react.pages.academy/static/film/background/matrix.jpg',
            'backgroundColor': '#B9B27E',
            'videoLink': 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
            'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
            'description': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            'rating': 4.4,
            'scoresCount': 1503092,
            'director': 'Wachowski Brothers',
            'starring': [
              'Keanu Reeves',
              'Laurence Fishburne',
              'Carrie-Anne Moss'
            ],
            'runTime': 136,
            'genre': 'Action',
            'year': 1999,
            'isFavorite': false
          }
        },
        promoFilm: {
          'id': '1',
          'title': 'Bronson',
          'posterImage': 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
          'previewImage': 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
          'backgroundImage': 'https://7.react.pages.academy/static/film/background/bronson.jpg',
          'backgroundColor': '#73B39A',
          'videoLink': 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
          'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
          'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
          'rating': 3.6,
          'scoresCount': 109661,
          'director': 'Nicolas Winding Refn',
          'starring': [
            'Tom Hardy',
            'Kelly Adams',
            'Luing Andrews'
          ],
          'runTime': 92,
          'genre': 'Action',
          'year': 2008,
          'isFavorite': false
        },
        waitingResponse: false,
        errorMessage: '',
      },
      PROCESS: {
        currentGenre: 'All genres',
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
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage/>
        </Router>
      </Provider>
    );

    expect(screen.getByText('Catalog')).toBeInTheDocument();
    expect(screen.queryAllByText('Bronson').length).toBe(2);
    expect(screen.queryByText('Show more')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('show-more'));
    expect(screen.queryByText('Show more')).not.toBeInTheDocument()
  });
});
