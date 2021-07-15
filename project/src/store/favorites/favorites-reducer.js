import {createReducer} from '@reduxjs/toolkit';
import {getFavoriteFilms} from '../store-utils.js';
import {fetchFavoritesFail, fetchFavoritesStart, fetchFavoritesSuccess} from './favorites-action.js';

const initialState = {
  favoritesList: [],
  waitingFavoritesResponse: false,
  fetchFavoritesError: null,
};

export const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFavoritesStart, (state, action) => {
      state.waitingFavoritesResponse = true;
      state.fetchFavoritesError = null;
    })
    .addCase(fetchFavoritesSuccess, (state, action) => {
      state.waitingFavoritesResponse = false;
      state.favoritesList = getFavoriteFilms(action.payload);
    })
    .addCase(fetchFavoritesFail, (state, action) => {
      state.waitingFavoritesResponse = false;
      state.fetchFavoritesError = action.payload;
    });
});
