import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE_TYPE} from '../../const.js';
import {changeGenre} from './process-action.js';

const initialState = {
  currentGenre: DEFAULT_GENRE_TYPE,
};

export const processReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    });
});
