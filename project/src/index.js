import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films.js';
import {adaptFilmToClient} from './utils.js';

const adaptedFilms = films.map(adaptFilmToClient);

ReactDOM.render(
  <React.StrictMode>
    <App films={adaptedFilms}/>
  </React.StrictMode>,
  document.getElementById('root'));
