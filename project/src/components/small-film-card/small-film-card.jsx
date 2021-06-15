import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const.js';
import {Link} from 'react-router-dom';
import {filmPropertyTypes} from '../../prop-types/films.js';

function SmallFilmCard({id, title, previewImage, handleFilmCardHover}) {
  const filmRoute = AppRoute.FILM.replace(':id', id);
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={(a) => handleFilmCardHover(id)}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={filmRoute} className="small-film-card__link">{title}</Link>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  id: filmPropertyTypes.id.isRequired,
  title: filmPropertyTypes.title.isRequired,
  previewImage: filmPropertyTypes.previewImage.isRequired,
  handleFilmCardHover: PropTypes.func.isRequired,
};

export default SmallFilmCard;
