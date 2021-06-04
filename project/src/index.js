import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {randomElem, randomInt} from './utils.js';
import {GENRES, TITLES} from './consts.js';

function getFilmCardProps () {
  return {
    title: randomElem(TITLES),
    genre: randomElem(GENRES),
    year: randomInt(2021, 2000),
  };
}

const cardFilmProps = getFilmCardProps();

ReactDOM.render(
  <React.StrictMode>
    <App
      title={cardFilmProps.title}
      genre={cardFilmProps.genre}
      year={cardFilmProps.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
