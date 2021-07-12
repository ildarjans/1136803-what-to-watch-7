import {ActionType} from '../action-type.js';

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_CURRENT_GENRE,
  payload: genre,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
