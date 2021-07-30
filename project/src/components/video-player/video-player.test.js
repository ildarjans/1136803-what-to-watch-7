import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import VideoPlayer from './video-player.jsx';
import {AppRoute} from '../../const.js';

const play = jest.fn();
const pause = jest.fn();
const requestFullscreen = jest.fn();

describe('Component: VideoPlayer', () => {
  const history = createMemoryHistory();
  const configureFakeStore = configureStore();
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
      },
      waitingResponse: false,
    },
  });

  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = play;
    window.HTMLMediaElement.prototype.pause = pause;
    window.HTMLMediaElement.prototype.requestFullscreen = requestFullscreen;
    window.HTMLMediaElement.prototype._mock = {
      duration: 100,
      currentTime: 10,
    };
    Object.defineProperty(window.HTMLMediaElement.prototype, 'duration', {
      get() {
        return this._mock.duration;
      },
      set(value) {
        this._mock.duration = value;
      },
    });
    Object.defineProperty(window.HTMLMediaElement.prototype, 'currentTime', {
      get() {
        return this._mock.currentTime;
      },
      set(value) {
        this._mock.currentTime = value;
      },
    });
  });
  beforeEach(() => {
    history.push('/player/1');
  });
  it('Should render correctly.', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.PLAYER} component={VideoPlayer}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/exit/i)).toBeInTheDocument();
    expect(screen.getByText(/play/i)).toBeInTheDocument();
    expect(screen.getByText(/full screen/i)).toBeInTheDocument();


    userEvent.click(screen.getByTestId('play-button'));
    expect(play).toHaveBeenCalledTimes(1);
    fireEvent(screen.getByTestId('video'), new Event('play'));
    expect(screen.getByText(/pause/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('play-button'));
    expect(pause).toHaveBeenCalledTimes(1);
    fireEvent(screen.getByTestId('video'), new Event('pause'));
    expect(screen.getByText(/play/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('full-screen'));
    expect(requestFullscreen).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByTestId('exit'));
    expect(history.location.pathname).toBe('/film/1');


  });
  it('Should render correctly, before and after fired "canplay"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.PLAYER} component={VideoPlayer}/>
        </Router>
      </Provider>,
    );
    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
    fireEvent(screen.getByTestId('video'), new Event('canplay'));
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
  it('Should render correctly, before and after fired "timeupdate"', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.PLAYER} component={VideoPlayer}/>
        </Router>
      </Provider>,
    );

    expect(screen.queryByTestId('progress')).toBeInTheDocument();
    expect(screen.queryByTestId('progress')).toHaveValue(0);
    fireEvent(screen.getByTestId('video'), new Event('timeupdate'));
    expect(Number(screen.queryByTestId('progress').getAttribute('value'))).toBeGreaterThan(0);
  });
});
