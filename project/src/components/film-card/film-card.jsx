import React from 'react';
import Header from '../header/header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import ButtonMyList from '../button-my-list/button-my-list.js';
import ButtonPlay from '../button-play/button-play.js';
import {HeaderClass} from '../../const.js';
import {filmPropertyTypes} from '../../prop-types/films.js';

function FilmCard({title, genre, year, posterImage, backgroundImage}) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header specialClass={HeaderClass.FILM_CARD}>
        <UserBlock/>
      </Header>

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
              <ButtonPlay/>
              <ButtonMyList/>
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
