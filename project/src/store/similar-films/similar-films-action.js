import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

export const fetchSimilarFilmsStart = createAction(ActionType.FETCH_SIMILAR_FILMS_START);

export const fetchSimilarFilmsSuccess = createAction(
  ActionType.FETCH_SIMILAR_FILMS_SUCCESS, (films) => ({
    payload: films,
  }));

export const fetchSimilarFilmsFail = createAction(
  ActionType.FETCH_SIMILAR_FILMS_FAIL, (err) => ({
    payload: err,
  }));
