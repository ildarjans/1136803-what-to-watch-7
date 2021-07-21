import {reviewsReducer} from './reviews-reducer.js';
import {
  addReviewFail,
  addReviewSuccess,
  fetchReviewsFail,
  fetchReviewsStart,
  fetchReviewsSuccess
} from './reviews-action.js';

describe('reviews reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      waitingFetchResponse: false,
      waitingPostResponse: false,
      fetchErrorMessage: '',
      postErrorMessage: '',
      reviews: [],
    };
  });
  it('Without parameters return initial state', () => {
    expect(reviewsReducer(undefined, {})).toEqual(state);
  });

  it('Action \'fetchReviewsStart\' return correct state', () => {
    const expectedState = {
      waitingFetchResponse: true,
      waitingPostResponse: false,
      fetchErrorMessage: '',
      postErrorMessage: '',
      reviews: [],
    };
    expect(reviewsReducer(state, fetchReviewsStart())).toEqual(expectedState);
  });
  it('Action \'fetchReviewsSuccess\' return correct state', () => {
    const reviews = [
      {
        'rating': 8,
        'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European.'
      },
      {
        'rating': 3,
        'comment': 'Raj is a rich, carefree, happy-go-lucky second generation NRI.'
      }
    ];
    const expectedState = {
      waitingFetchResponse: false,
      waitingPostResponse: false,
      fetchErrorMessage: '',
      postErrorMessage: '',
      reviews,
    };
    expect(reviewsReducer(state, fetchReviewsSuccess(reviews))).toEqual(expectedState);
  });
  it('Action \'fetchReviewsFail\' return correct state', () => {
    const fetchErrorMessage = 'bad request error message';
    const expectedState = {
      waitingFetchResponse: false,
      waitingPostResponse: false,
      fetchErrorMessage,
      postErrorMessage: '',
      reviews: [],
    };
    expect(reviewsReducer(state, fetchReviewsFail(fetchErrorMessage))).toEqual(expectedState);
  });
  it('Action \'addReviewSuccess\' return correct state', () => {
    const expectedState = {
      waitingFetchResponse: false,
      waitingPostResponse: false,
      fetchErrorMessage: '',
      postErrorMessage: '',
      reviews: [],
    };
    expect(reviewsReducer(state, addReviewSuccess())).toEqual(expectedState);
  });
  it('Action \'addReviewFail\' return correct state', () => {
    const postErrorMessage = 'bad request error message';
    const expectedState = {
      waitingFetchResponse: false,
      waitingPostResponse: false,
      fetchErrorMessage: '',
      postErrorMessage,
      reviews: [],
    };
    expect(reviewsReducer(state, addReviewFail(postErrorMessage))).toEqual(expectedState);
  });


})
