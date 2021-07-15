import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';
import {adaptFilmToClient} from '../../utils.js';

const initialState = {
  waitingSimilarFilmsResponse: false,
  fetchSimilarFilmsError: null,
  similarFilms: [],
};

export const similarFilmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.FETCH_SIMILAR_FILMS_START, (state, action) => {
      state.waitingSimilarFilmsResponse = true;
      state.fetchSimilarFilmsError = null;
    })
    .addCase(ActionType.FETCH_SIMILAR_FILMS_SUCCESS, (state, action) => {
      state.waitingSimilarFilmsResponse = false;
      state.similarFilms = action.payload.map(adaptFilmToClient);
    })
    .addCase(ActionType.FETCH_SIMILAR_FILMS_FAIL, (state, action) => {
      state.waitingSimilarFilmsResponse = false;
      state.fetchSimilarFilmsError = action.payload;
    });
});
