import React, {useState} from 'react';
import FilmCardSmall from '../film-card-small/film-card-small.jsx';
import {filmsPropTypes} from '../../prop-types/films.js';


function FilmList({films}) {
  const [id, setActiveCard] = useState();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall
          key={film.id}
          id={film.id}
          title={film.title}
          hasVideo={id === film.id}
          image={film.previewImage}
          videoSrc={film.previewVideoLink}
          onCardHover={setActiveCard}
        />
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default FilmList;
