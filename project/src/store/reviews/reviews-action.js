import {ActionType} from '../action-type.js';

export const fetchReviewsStart = () => ({
  type: ActionType.FETCH_REVIEWS_START,
});

export const fetchReviewsSuccess = (reviews) => ({
  type: ActionType.FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviewsFail = (err) => ({
  type: ActionType.FETCH_REVIEWS_FAIL,
  payload: err,
});

export const addReviewStart = () => ({
  type: ActionType.ADD_REVIEW_START,
});

export const addReviewSuccess = () => ({
  type: ActionType.ADD_REVIEW_SUCCESS,
});

export const addReviewFail = (err) => ({
  type: ActionType.ADD_REVIEW_FAIL,
  payload: err,
});
