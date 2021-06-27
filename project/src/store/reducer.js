import {DEFAULT_GENRE_TYPE} from '../const.js';
import {ActionType} from './action.js';
import {extend} from '../utils.js';
import {getFilmsLists} from './store-utils.js';

const initialState = {
  currentGenre: DEFAULT_GENRE_TYPE,
  filmsList: [],
  filmsByGenre: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CURRENT_GENRE):
      return extend(state, {currentGenre: action.payload});
    case (ActionType.FILMS_LOADING_SUCCESS): {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      return extend(state, {filmsList, filmsByGenre});
    }
  }
  return state;
};
