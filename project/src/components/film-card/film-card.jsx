import React from 'react';
import AuthHeader from '../auth-header/auth-header.jsx';
import MyListButton from '../my-list-button/my-list-button.js';
import PlayButton from '../play-button/play-button.js';
import {HeaderClass} from '../../const.js';
import {filmPropertyTypes} from '../../prop-types/films.js';

function FilmCard({title, genre, year, posterImage, backgroundImage}) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <AuthHeader specialClass={HeaderClass.FILM_CARD}/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={posterImage}
              alt={title} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{year}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton/>
              <MyListButton/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCard.propTypes = {
  title: filmPropertyTypes.title.isRequired,
  genre: filmPropertyTypes.genre.isRequired,
  year: filmPropertyTypes.year.isRequired,
  posterImage: filmPropertyTypes.posterImage.isRequired,
  backgroundImage: filmPropertyTypes.backgroundImage.isRequired,
};

export default FilmCard;
