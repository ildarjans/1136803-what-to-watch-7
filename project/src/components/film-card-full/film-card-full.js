import React from 'react';
import Header from '../header/header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import ButtonPlay from '../button-play/button-play.js';
import ButtonMyList from '../button-my-list/button-my-list.js';
import ButtonAddReview from '../button-add-review/button-add-review.js';
import {HeaderClass, NumerableRating} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';


function FilmCardFull({film}) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header specialClass={HeaderClass.FILM_CARD}>
          <UserBlock/>
        </Header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.year}</span>
            </p>

            <div className="film-card__buttons">
              <ButtonPlay/>
              <ButtonMyList/>
              <ButtonAddReview id={film.id}/>
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
            />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">{film.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{NumerableRating[Math.floor(film.rating)]}</span>
                <span className="film-rating__count">{film.scoresCount} ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              {film.description.split('\n').map((text) => <p key={text}>{text}</p>)}

              <p className="film-card__director">
                <strong>
                  Director: {film.director}
                </strong>
              </p>

              <p className="film-card__starring">
                <strong>
                  {film.starring.join(', ')}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmCardFull.propTypes = {
  film: filmPropTypes.isRequired,
};

export default FilmCardFull;
