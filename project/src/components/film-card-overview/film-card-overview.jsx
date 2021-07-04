import React from 'react';
import PropTypes from 'prop-types';
import {NumerableRating} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';

function FilmCardOverview({film}) {
  return (
    <>
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
    </>
  );
}

FilmCardOverview.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmCardOverview;

