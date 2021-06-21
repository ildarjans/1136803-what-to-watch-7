import {DEFAULT_GENRE_TYPE} from '../const.js';
import {ActionType} from './action.js';
import {extend} from '../utils.js';
import {films} from '../mocks/films.js';
import {getFilmsLists} from './store-utils.js';

const [filmsById, filmsByGenre] = getFilmsLists(films);

const initialState = {
  genre: DEFAULT_GENRE_TYPE,
  filmsList: filmsById,
  filmsByGenre: filmsByGenre,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_GENRE):
      return extend(state, {genre: action.payload});
    case (ActionType.GET_FILMS): {
      const [filmsListById, filmsListByGenre] = getFilmsLists(action.payload);
      return extend(state, {filmsById: filmsListById, filmsByGenre: filmsListByGenre});
    }
  }
  return state;
};
