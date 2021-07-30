import {createReducer} from '@reduxjs/toolkit';
import {
  addReviewFail,
  addReviewSuccess,
  fetchReviewsFail,
  fetchReviewsStart,
  fetchReviewsSuccess
} from './reviews-action.js';

const initialState = {
  waitingFetchResponse: false,
  waitingPostResponse: false,
  fetchErrorMessage: '',
  postErrorMessage: '',
  reviews: [],
};

export const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchReviewsStart, (state) => {
      state.waitingFetchResponse = true;
      state.fetchErrorMessage = '';
    })
    .addCase(fetchReviewsSuccess, (state, action) => {
      state.waitingFetchResponse = false;
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsFail, (state, action) => {
      state.waitingFetchResponse = false;
      state.fetchErrorMessage = action.payload;
    })
    .addCase(addReviewSuccess, (state) => {
      state.waitingPostResponse = false;
    })
    .addCase(addReviewFail, (state, action) => {
      state.waitingPostResponse = false;
      state.postErrorMessage = action.payload;
    });
});

