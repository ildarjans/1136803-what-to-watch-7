import React, {useCallback, useEffect, useState} from 'react';
import FilmCardSmall from '../film-card-small/film-card-small.jsx';
import {filmsPropTypes} from '../../prop-types/films.js';
import {OPEN_PREVIEW_DELAY} from '../../const.js';

function FilmList({films}) {
  const [id, setActiveCard] = useState();
  let delayTimer;

  const handleFilmCardMouseOver = useCallback((filmId) => {
    delayTimer = setTimeout(() => setActiveCard(filmId), OPEN_PREVIEW_DELAY);
  }, [id, delayTimer]);

  const handleFilmCardMouseOut = useCallback(() => {
    clearTimeout(delayTimer);
    if (id) {
      setActiveCard(null);
    }
  }, [id, delayTimer]);

  useEffect(() => () => clearTimeout(delayTimer));

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall
          key={film.id}
          id={film.id}
          title={film.title}
          hasVideo={id === film.id}
          previewImage={film.previewImage}
          videoLink={film.previewVideoLink}
          onFilmCardMouseOver={handleFilmCardMouseOver}
          onFilmCardMouseOut={handleFilmCardMouseOut}
        />
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default FilmList;
