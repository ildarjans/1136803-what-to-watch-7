import {ActionType} from '../action-type.js';
import {
  addReviewFail,
  addReviewSuccess,
  fetchReviewsFail,
  fetchReviewsStart,
  fetchReviewsSuccess
} from './reviews-action.js';

describe('reviews action', () => {
  it('Action creator \'fetchReviewsStart\' return correct action', () => {
    const expectedAction = {
      type: ActionType.FETCH_REVIEWS_START,
    };
    expect(fetchReviewsStart()).toEqual(expectedAction);
  });
  it('Action creator \'addReviewSuccess\' return correct action', () => {
    const expectedAction = {
      type: ActionType.ADD_REVIEW_SUCCESS,
    };
    expect(addReviewSuccess()).toEqual(expectedAction);
  });
  it('Action creator \'fetchReviewsSuccess\' return correct action', () => {
    const payload = 'reviews array';
    const expectedAction = {
      type: ActionType.FETCH_REVIEWS_SUCCESS,
      payload,
    };
    expect(fetchReviewsSuccess(payload)).toEqual(expectedAction);
  });
  it('Action creator \'fetchReviewsFail\' return correct action', () => {
    const payload = 'bad request error message';
    const expectedAction = {
      type: ActionType.FETCH_REVIEWS_FAIL,
      payload,
    };
    expect(fetchReviewsFail(payload)).toEqual(expectedAction);
  });
  it('Action creator \'addReviewFail\' return correct action', () => {
    const payload = 'bad request error message';
    const expectedAction = {
      type: ActionType.ADD_REVIEW_FAIL,
      payload,
    };
    expect(addReviewFail(payload)).toEqual(expectedAction);
  });
});
