import {ActionType} from '../action-type.js';
import {getFilmsLists} from '../store-utils.js';
import {extend} from '../../utils.js';

const initialState = {
  filmsList: [],
  filmsByGenre: {},
  waitingFilmsResponse: false,
  fetchFilmsError: null,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.FETCH_FILMS_START): {
      return extend(state, {
        waitingFilmsResponse: true,
        fetchFilmsError: null,
      });
    }
    case (ActionType.FETCH_FILMS_SUCCESS): {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      return extend(state, {
        filmsList,
        filmsByGenre,
        waitingFilmsResponse: false,
      });
    }
    case (ActionType.FETCH_FILMS_FAIL): {
      return extend(state, {
        fetchFilmsError: action.payload,
        waitingFilmsResponse: false,
      });
    }
  }
  return state;
};
