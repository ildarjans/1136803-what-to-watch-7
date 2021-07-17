import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

const initialState = {
  waitingFetchResponse: false,
  waitingPostResponse: false,
  fetchErrorMessage: '',
  postErrorMessage: '',
  reviews: [],
};

export const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.FETCH_REVIEWS_START, (state) => {
      state.waitingFetchResponse = true;
      state.fetchErrorMessage = '';
    })
    .addCase(ActionType.FETCH_REVIEWS_SUCCESS, (state, action) => {
      state.waitingFetchResponse = false;
      state.reviews = action.payload;
    })
    .addCase(ActionType.FETCH_REVIEWS_FAIL, (state, action) => {
      state.waitingFetchResponse = false;
      state.fetchErrorMessage = action.payload.message;
    })
    .addCase(ActionType.ADD_REVIEW_START, (state, action) => {
      state.waitingPostResponse = false;
      state.postErrorMessage = '';
    })
    .addCase(ActionType.ADD_REVIEW_SUCCESS, (state, action) => {
      state.waitingAddFilmReviewResponse = false;
    })
    .addCase(ActionType.ADD_REVIEW_FAIL, (state, action) => {
      state.waitingAddFilmReviewResponse = false;
      state.postErrorMessage = action.payload.message;
    });
});

