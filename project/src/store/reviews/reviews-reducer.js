import {ActionType} from '../action-type.js';
import {extend} from '../../utils.js';

const initialState = {
  waitingReviewsResponse: false,
  waitingAddReviewResponse: false,
  fetchReviewsError: null,
  postFilmReviewErrorMessage: '',
  reviews: [],
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.FETCH_REVIEWS_START): {
      return extend(state, {
        waitingReviewsResponse: true,
        fetchReviewsError: null,
      });
    }
    case (ActionType.FETCH_REVIEWS_SUCCESS): {
      return extend(state, {
        waitingReviewsResponse: false,
        reviews: action.payload,
      });
    }
    case (ActionType.FETCH_REVIEWS_FAIL): {
      return extend(state, {
        waitingReviewsResponse: false,
        fetchReviewsError: action.payload,
      });
    }
    case (ActionType.ADD_REVIEW_START): {
      return extend(state, {
        waitingAddReviewResponse: true,
        postFilmReviewErrorMessage: '',
      });
    }
    case (ActionType.ADD_REVIEW_SUCCESS): {
      return extend(state, {
        waitingAddFilmReviewResponse: false,
      });
    }
    case (ActionType.ADD_REVIEW_FAIL): {
      return extend(state, {
        waitingAddFilmReviewResponse: false,
        postFilmReviewErrorMessage: action.payload.message,
      });
    }
  }
  return state;
};
