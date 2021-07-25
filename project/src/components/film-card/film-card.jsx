import React from 'react';
import PropTypes from 'prop-types';
import AuthHeader from '../auth-header/auth-header.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import PlayButton from '../play-button/play-button.jsx';
import {HeaderClass} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';

function FilmCard({film}) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <AuthHeader specialClass={HeaderClass.FILM_CARD}/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={film.posterImage}
              alt={film.title} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.year}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton id={film.id}/>
              <MyListButton id={film.id} isFavorite={film.isFavorite}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmCard;
