import React from 'react';
import PropTypes from 'prop-types';
import {genreTypes} from '../../const.js';
import Genre from '../genre/genre.jsx';


function GenreList({activeGenre}) {
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
