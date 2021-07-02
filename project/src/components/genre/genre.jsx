import React from 'react';
import {booleanPropTypes, funcPropTypes, stringPropTypes} from '../../prop-types/common.js';

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
  genre: stringPropTypes.isRequired,
  isActive: booleanPropTypes.isRequired,
  onGenreClick: funcPropTypes.isRequired,
};

export default Genre;
