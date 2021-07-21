import {createReducer} from '@reduxjs/toolkit';
import {adaptFilmToClient} from '../../utils.js';
import {fetchSimilarFilmsFail, fetchSimilarFilmsStart, fetchSimilarFilmsSuccess} from './similar-films-action.js';

const initialState = {
  waitingResponse: false,
  errorMessage: '',
  similarFilms: [],
};

export const similarFilmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchSimilarFilmsStart, (state, action) => {
      state.waitingResponse = true;
      state.errorMessage = '';
    })
    .addCase(fetchSimilarFilmsSuccess, (state, action) => {
      state.waitingResponse = false;
      state.similarFilms = action.payload.map(adaptFilmToClient);
    })
    .addCase(fetchSimilarFilmsFail, (state, action) => {
      state.waitingResponse = false;
      state.errorMessage = action.payload;
    });
});
