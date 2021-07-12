import {ActionType} from '../action-type.js';

export const fetchFavoritesStart = () => ({
  type: ActionType.FETCH_FAVORITES_START,
});

export const fetchFavoritesSuccess = (films) => ({
  type: ActionType.FETCH_FAVORITES_SUCCESS,
  payload: films,
});

export const fetchFavoritesFail = (err) => ({
  type: ActionType.FETCH_FAVORITES_FAIL,
  payload: err,
});
