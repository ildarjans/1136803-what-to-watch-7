import React from 'react';
import PropTypes from 'prop-types';

const ACTIVE_CLASSNAME = 'catalog__genres-item--active';

function Genre({genre, isActive}) {
  return (
    <li className={`catalog__genres-item ${isActive ? ACTIVE_CLASSNAME : ''}`}>
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Genre;
