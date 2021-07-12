import {ActionType} from '../action-type.js';
import {adaptFilmToClient, extend} from '../../utils.js';

const initialState = {
  waitingSimilarFilmsResponse: false,
  fetchSimilarFilmsError: null,
  similarFilms: [],
};

export const similarFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.FETCH_SIMILAR_FILMS_START): {
      return extend(state, {
        waitingSimilarFilmsResponse: true,
        fetchSimilarFilmsError: null,
      });
    }
    case (ActionType.FETCH_SIMILAR_FILMS_SUCCESS): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        similarFilms: action.payload.map(adaptFilmToClient),
      });
    }
    case (ActionType.FETCH_SIMILAR_FILMS_FAIL): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        fetchSimilarFilmsError: action.payload,
      });
    }
  }
  return state;
};
