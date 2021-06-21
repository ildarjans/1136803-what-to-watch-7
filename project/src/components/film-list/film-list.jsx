import React, {useState} from 'react';
import FilmCardSmall from '../film-card-small/film-card-small.jsx';
import {filmsPropTypes} from '../../prop-types/films.js';
import {OPEN_PREVIEW_DELAY} from '../../const.js';

const handleFilmCardMouseOver = (id, setActiveCard) => setTimeout(() => setActiveCard(id), OPEN_PREVIEW_DELAY);

const handleFilmCardMouseOut = (delayTimer, hasVideo, setActiveCard) => {
  clearTimeout(delayTimer);
  if (hasVideo) {
    setActiveCard(null);
  }
};

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
          onPlayVideo={setActiveCard}
          onCardMouseOver={handleFilmCardMouseOver}
          onCardMouseOut={handleFilmCardMouseOut}
        />
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default FilmList;
