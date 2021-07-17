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
