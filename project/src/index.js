import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getFilmCardProps} from './mock-utils.js';

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
