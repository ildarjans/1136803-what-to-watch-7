import React from 'react';
import PropTypes from 'prop-types';
import {genreTypes} from '../../const.js';
import Genre from '../genre/genre.jsx';

const DEFAULT_GENRE = 'All genres';

function GenreList({activeGenre = DEFAULT_GENRE}) {
  return (
    <ul className="catalog__genres-list">
      {genreTypes.map((genre) => (
        <Genre key={genre} genre={genre} isActive={activeGenre === genre}/>
      ))}
    </ul>
  );
}

GenreList.propTypes = {
  activeGenre: PropTypes.oneOf(genreTypes).isRequired,
};

export default GenreList;
