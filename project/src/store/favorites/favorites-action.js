import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';


export const fetchFavoritesStart = createAction(ActionType.FETCH_FAVORITES_START);

export const fetchFavoritesSuccess = createAction(
  ActionType.FETCH_FAVORITES_SUCCESS, (films) => ({
    payload: films,
  }));

export const fetchFavoritesFail = createAction(
  ActionType.FETCH_FAVORITES_FAIL, (err) => ({
    payload: err,
  }));

export const addToFavoritesSuccess = createAction(ActionType.ADD_TO_FAVORITES_SUCCESS);

export const addToFavoritesFail = createAction(
  ActionType.ADD_TO_FAVORITES_FAIL, (err) => ({
    payload: err,
  }));
