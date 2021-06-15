import React, {useState} from 'react';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';
import {filmsPropTypes} from '../../prop-types/films.js';

function FilmList({films}) {
  const [, setActiveCard] = useState();
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          id={film.id}
          title={film.title}
          previewImage={film.previewImage}
          handleFilmCardHover={setActiveCard}
        />
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default FilmList;
