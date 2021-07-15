import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

export const changeGenre = createAction(
  ActionType.CHANGE_CURRENT_GENRE, (genre) => ({
    payload: genre,
  }));

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE, (url) => ({
    payload: url,
  }));
