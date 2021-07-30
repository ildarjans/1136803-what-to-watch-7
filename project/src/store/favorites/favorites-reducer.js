import {createReducer} from '@reduxjs/toolkit';
import {getFavoriteFilms} from '../store-utils.js';
import {
  addToFavoritesSuccess,
  addToFavoritesFail,
  fetchFavoritesStart,
  fetchFavoritesSuccess,
  fetchFavoritesFail
} from './favorites-action.js';

const initialState = {
  favoritesList: [],
  waitingResponse: false,
  errorMessage: '',
};

export const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFavoritesStart, (state) => {
      state.waitingResponse = true;
      state.errorMessage = '';
    })
    .addCase(fetchFavoritesSuccess, (state, action) => {
      state.waitingResponse = false;
      state.favoritesList = getFavoriteFilms(action.payload);
    })
    .addCase(fetchFavoritesFail, (state, action) => {
      state.waitingResponse = false;
      state.errorMessage = action.payload;
    })
    .addCase(addToFavoritesSuccess, (state) => {
      state.waitingResponse = false;
      state.errorMessage = '';
    })
    .addCase(addToFavoritesFail, (state, action) => {
      state.waitingResponse = false;
      state.errorMessage = action.payload;
    });
});
