import {createReducer} from '@reduxjs/toolkit';
import {getFilmsLists, updateFilmInFilmsList, updateFilmInGenreList, updatePromoFilm} from '../store-utils.js';
import {
  fetchFilmsFail,
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchPromoFilmFail,
  fetchPromoFilmSuccess,
  updateFilm
} from './films-action.js';
import {adaptFilmToClient} from '../../utils.js';

const initialState = {
  filmsList: {},
  filmsByGenre: {},
  promoFilm: {},
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
    })
    .addCase(fetchPromoFilmSuccess, (state, action) => {
      state.promoFilm = adaptFilmToClient(action.payload);
    })
    .addCase(fetchPromoFilmFail, (state, action) => {
      state.errorMessage = action.payload;
    })
    .addCase(updateFilm, (state, action) => {
      state.filmsList = updateFilmInFilmsList(action.payload, state.filmsList);
      state.filmsByGenre = updateFilmInGenreList(action.payload, state.filmsByGenre);
      state.promoFilm = updatePromoFilm(action.payload, state.promoFilm);
    });


});
