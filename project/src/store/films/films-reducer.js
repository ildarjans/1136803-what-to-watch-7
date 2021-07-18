import {createReducer} from '@reduxjs/toolkit';
import {getFilmsLists} from '../store-utils.js';
import {fetchFilmsFail, fetchFilmsStart, fetchFilmsSuccess} from './films-action.js';

const initialState = {
  filmsList: [],
  filmsByGenre: {},
  waitingResponse: false,
  errorMessage: '',
};

export const filmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilmsStart, (state) => {
      state.waitingResponse = true;
      state.errorMessage = '';
    })
    .addCase(fetchFilmsSuccess, (state, action) => {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      state.filmsList = filmsList;
      state.filmsByGenre = filmsByGenre;
      state.waitingResponse = false;
    })
    .addCase(fetchFilmsFail, (state, action) => {
      state.waitingResponse = false;
      state.errorMessage = action.payload;
    });
});
