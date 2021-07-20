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

export const getFavoriteFilms = (films) => films.map(adaptFilmToClient);

export const updateFilmInGenreList = (updatedFilm, filmsByGenre) => {
  const adaptedFilm = adaptFilmToClient(updatedFilm);
  filmsByGenre[adaptedFilm.genre] = filmsByGenre[adaptedFilm.genre].map((film) => film.id === adaptedFilm.id ? adaptedFilm : film);
  filmsByGenre[DEFAULT_GENRE_TYPE] = filmsByGenre[DEFAULT_GENRE_TYPE].map((film) => film.id === adaptedFilm.id ? adaptedFilm : film);
  return filmsByGenre;
};

export const updateFilmInFilmsList = (updatedFilm, filmsList) => ({...filmsList, [updatedFilm.id]: adaptFilmToClient(updatedFilm)});

export const updatePromoFilm = (updatedFilm, promoFilm) => updatedFilm.id.toString() === promoFilm.id ? adaptFilmToClient(updatedFilm) : promoFilm;
