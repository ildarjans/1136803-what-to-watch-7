import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';
import {adaptFilmToClient} from '../../utils.js';

const initialState = {
  waitingResponse: false,
  errorMessage: '',
  similarFilms: [],
};

export const similarFilmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.FETCH_SIMILAR_FILMS_START, (state, action) => {
      state.waitingResponse = true;
      state.errorMessage = '';
    })
    .addCase(ActionType.FETCH_SIMILAR_FILMS_SUCCESS, (state, action) => {
      state.waitingResponse = false;
      state.similarFilms = action.payload.map(adaptFilmToClient);
    })
    .addCase(ActionType.FETCH_SIMILAR_FILMS_FAIL, (state, action) => {
      state.waitingResponse = false;
      state.errorMessage = action.payload;
    });
});
