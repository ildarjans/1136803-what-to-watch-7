import React from 'react';
import PropTypes from 'prop-types';
import AuthHeader from '../auth-header/auth-header.jsx';
import PlayButton from '../play-button/play-button.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import AddReviewButton from '../add-review-button/add-review-button.jsx';
import {AuthStatus, HeaderClass} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';
import FilmCardNav from '../film-card-nav/film-card-nav.jsx';


function FilmCardFull({film, authorizationStatus}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.title} data-testid={'bg-image'}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AuthHeader className={HeaderClass.FILM_CARD}/>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.year}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton id={film.id}/>
              <MyListButton id={film.id} isFavorite={film.isFavorite}/>
              {authorizationStatus === AuthStatus.AUTHORIZED && <AddReviewButton id={film.id}/>}
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img
              src={film.posterImage}
              alt={film.title}
              width="218"
              height="327"
              data-testid={'poster-image'}
            />
          </div>

          <div className="film-card__desc">
            <FilmCardNav film={film}/>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCardFull.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default FilmCardFull;
