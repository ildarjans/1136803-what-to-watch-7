import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_CLASSNAME = 'catalog__genres-item--active';

function Genre({genre, isActive, onGenreClick}) {
  return (
    <li
      className={`catalog__genres-item ${isActive ? ACTIVE_CLASSNAME : ''}`}
      onClick={() => onGenreClick(genre)}
    >
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default Genre;
