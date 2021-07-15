import {ActionType} from '../action-type.js';
import {createAction} from '@reduxjs/toolkit';

export const fetchReviewsStart = createAction(ActionType.FETCH_REVIEWS_START);
export const addReviewStart = createAction(ActionType.ADD_REVIEW_START);
export const addReviewSuccess = createAction(ActionType.ADD_REVIEW_SUCCESS);

export const fetchReviewsSuccess = createAction(
  ActionType.FETCH_REVIEWS_SUCCESS, (reviews) => ({
    payload: reviews,
  }));

export const fetchReviewsFail = createAction(
  ActionType.FETCH_REVIEWS_FAIL, (err) => ({
    payload: err,
  }));

export const addReviewFail = createAction(
  ActionType.ADD_REVIEW_FAIL, (err) => ({
    payload: err,
  }));
