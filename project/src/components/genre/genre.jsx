import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

const ACTIVE_CLASSNAME = 'catalog__genres-item--active';

function Genre({genre, isActive, onGenreClick}) {
  return (
    <li
      className={`catalog__genres-item ${isActive ? ACTIVE_CLASSNAME : ''}`}
      onClick={() => onGenreClick(genre)}
    >
      <Link to={AppRoute.ROOT} className="catalog__genres-link">{genre}</Link>
    </li>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default Genre;
