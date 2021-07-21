import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

export const fetchFilmsSuccess = createAction(
  ActionType.FETCH_FILMS_SUCCESS, (films) => ({
    payload: films,
  }));

export const fetchFilmsStart = createAction(ActionType.FETCH_FILMS_START);

export const fetchFilmsFail = createAction(
  ActionType.FETCH_FILMS_FAIL, (err) => ({
    payload: err,
  }));

export const fetchPromoFilmSuccess = createAction(ActionType.FETCH_PROMO_FILM_SUCCESS);
export const fetchPromoFilmFail = createAction(
  ActionType.FETCH_PROMO_FILM_FAIL, (err) => ({
    payload: err,
  }));

export const updateFilm = createAction(
  ActionType.UPDATE_FILM, (film) => ({
    payload: film,
  }));
