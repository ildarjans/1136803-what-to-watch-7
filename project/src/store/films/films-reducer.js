import {createReducer} from '@reduxjs/toolkit';
import {getFilmsLists} from '../store-utils.js';
import {fetchFilmsFail, fetchFilmsStart, fetchFilmsSuccess} from './films-action.js';

const initialState = {
  filmsList: [],
  filmsByGenre: {},
  waitingFilmsResponse: false,
  fetchFilmsError: null,
};

export const filmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilmsStart, (state) => {
      state.waitingFilmsResponse = true;
      state.fetchFilmsError = null;
    })
    .addCase(fetchFilmsSuccess, (state, action) => {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      state.filmsList = filmsList;
      state.filmsByGenre = filmsByGenre;
      state.waitingFilmsResponse = false;
    })
    .addCase(fetchFilmsFail, (state, action) => {
      state.waitingFilmsResponse = false;
      state.fetchFilmsError = action.payload;
    });
});
