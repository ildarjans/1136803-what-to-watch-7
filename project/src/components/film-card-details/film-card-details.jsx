import React from 'react';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../prop-types/films.js';
import {getFilmDurationInHoursAndMinutes} from '../../utils.js';


function FilmCardDetails({film}) {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((star) => (
              <React.Fragment key={star}>
                {star}
                {<br/>}
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getFilmDurationInHoursAndMinutes(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.year}</span>
        </p>
      </div>
    </div>
  );
}

FilmCardDetails.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmCardDetails;
