import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import App from './app.jsx';
import createAPI from '../../services/api.js';
import {AppRoute} from '../../const.js';

const initialGuestState = {
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
      }
    ],
  },
  SIMILAR_FILMS: {
    waitingResponse: false,
    errorMessage: '',
    similarFilms: [
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
  },
  USER: {
    authorizationStatus: 'NO_AUTHORIZED',
    user: {}
  },
};

const initialAuthState = {
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
      }
    ],
  },
  SIMILAR_FILMS: {
    waitingResponse: false,
    errorMessage: '',
    similarFilms: [
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
};

describe('App routing', () => {
  const api = createAPI();
  const configureFakeStore = configureStore([thunk.withExtraArgument(api)]);
  let history;
  let store;
  let fakeApp;

  beforeAll(() => {
    store = configureFakeStore(initialGuestState);
    history = createMemoryHistory();

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('Should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);
    expect(screen.getByText('WTW')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText(/all genres/i)).toBeInTheDocument();
    expect(screen.getByText(/dramas/i)).toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();
    expect(screen.getByText('Macbeth')).toBeInTheDocument();
  });
  it('Should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);
    expect(screen.getByTestId('sign-in')).toBeInTheDocument();
  });
  it('Should render "MoviePage" when user navigate to "/film/2"', () => {
    history.push(AppRoute.FILM.replace(':id', '2'));
    render(fakeApp);
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();
    expect(screen.getByText('The Grand Budapest Hotel')).toBeInTheDocument();
    expect(screen.getByText('Macbeth')).toBeInTheDocument();
  });
  it('Should render "player" when user navigate to "/player/2"', () => {
    history.push(AppRoute.PLAYER.replace(':id', '2'));
    render(fakeApp);
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();
    expect(screen.getByText(/pause|play/i)).toBeInTheDocument();
    expect(screen.getByText(/full screen/i)).toBeInTheDocument();
  });
  it('Should render "NotFoundPage" when user navigate to "/notfoundpage"', () => {
    history.push('/notfoundpage');
    render(fakeApp);
    expect(screen.getByText('Page not Found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
  it('Should render "AddReviewPage" when user navigate to "/film/2/review"', () => {
    store = configureFakeStore(initialAuthState);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
    history.push(AppRoute.REVIEW.replace(':id', '2'));
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    expect(screen.getByText(/add review/i)).toBeInTheDocument();
    expect(screen.getByText('Fantastic Beasts: The Crimes of Grindelwald')).toBeInTheDocument();
  });
  it('Should render "MyList" when user navigate to "/mylist"', () => {
    store = configureFakeStore(initialAuthState);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
    history.push(AppRoute.FAVORITES);
    expect(screen.queryAllByText(/my list/i).length).toBe(2);
  });

});
