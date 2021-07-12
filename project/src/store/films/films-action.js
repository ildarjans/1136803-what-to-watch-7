import {ActionType} from '../action-type.js';

export const fetchFilmsSuccess = (films) => ({
  type: ActionType.FETCH_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilmsStart = () => ({
  type: ActionType.FETCH_FILMS_START,
});

export const fetchFilmsFail = (err) => ({
  type: ActionType.FETCH_FILMS_FAIL,
  payload: err,
});
