import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

const initialState = {
  waitingReviewsResponse: false,
  waitingAddReviewResponse: false,
  fetchReviewsError: null,
  postFilmReviewErrorMessage: '',
  reviews: [],
};

export const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.FETCH_REVIEWS_START, (state) => {
      state.waitingReviewsResponse = true;
      state.fetchReviewsError = null;
    })
    .addCase(ActionType.FETCH_REVIEWS_SUCCESS, (state, action) => {
      state.waitingReviewsResponse = false;
      state.reviews = action.payload;
    })
    .addCase(ActionType.FETCH_REVIEWS_FAIL, (state, action) => {
      state.waitingReviewsResponse = false;
      state.fetchReviewsError = action.payload;
    })
    .addCase(ActionType.ADD_REVIEW_START, (state, action) => {
      state.waitingAddReviewResponse = false;
      state.postFilmReviewErrorMessage = '';
    })
    .addCase(ActionType.ADD_REVIEW_SUCCESS, (state, action) => {
      state.waitingAddFilmReviewResponse = false;
    })
    .addCase(ActionType.ADD_REVIEW_FAIL, (state, action) => {
      state.waitingAddFilmReviewResponse = false;
      state.postFilmReviewErrorMessage = action.payload.message;
    });
});

