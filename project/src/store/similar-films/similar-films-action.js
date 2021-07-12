import {ActionType} from '../action-type.js';

export const fetchSimilarFilmsStart = () => ({
  type: ActionType.FETCH_SIMILAR_FILMS_START,
});

export const fetchSimilarFilmsSuccess = (films) => ({
  type: ActionType.FETCH_SIMILAR_FILMS_SUCCESS,
  payload: films,
});

export const fetchSimilarFilmsFail = (err) => ({
  type: ActionType.FETCH_SIMILAR_FILMS_FAIL,
  payload: err,
});
