import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';

function FilmList({films}) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film}/>)}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FilmList;
