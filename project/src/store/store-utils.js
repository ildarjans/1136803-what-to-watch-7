import {adaptFilmToClient} from '../utils.js';
import {DEFAULT_GENRE_TYPE} from '../const.js';

export const getFilmsLists = (films) => (
  films.reduce((acc, film) => {
    const [filmsById, filmsByGenre] = acc;
    const adaptedFilm = adaptFilmToClient(film);
    const {id, genre} = adaptedFilm;

    if (!filmsByGenre[genre]) {
      filmsByGenre[genre] = [];
    }

    filmsById[id] = adaptedFilm;
    filmsByGenre[genre].push(adaptedFilm);
    filmsByGenre[DEFAULT_GENRE_TYPE].push(adaptedFilm);

    return acc;
  }, [{}, {[DEFAULT_GENRE_TYPE]: []}])
);

export const getFavoriteList = (films) => films.map(adaptFilmToClient);
