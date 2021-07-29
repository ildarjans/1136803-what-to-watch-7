import {ActionType} from '../action-type.js';
import {fetchSimilarFilmsFail, fetchSimilarFilmsStart, fetchSimilarFilmsSuccess} from './similar-films-action.js';

describe('similar films action', () => {
  it('Action creator \'fetchSimilarFilmsStart\' return correct action', () => {
    const expectedAction = {
      type: ActionType.FETCH_SIMILAR_FILMS_START,
    };
    expect(fetchSimilarFilmsStart()).toEqual(expectedAction);
  });
  it('Action creator \'fetchSimilarFilmsSuccess\' return correct action', () => {
    const payload = 'similar films array';
    const expectedAction = {
      type: ActionType.FETCH_SIMILAR_FILMS_SUCCESS,
      payload,
    };
    expect(fetchSimilarFilmsSuccess(payload)).toEqual(expectedAction);
  });
  it('Action creator \'fetchSimilarFilmsFail\' return correct action', () => {
    const payload = 'bad request error message';
    const expectedAction = {
      type: ActionType.FETCH_SIMILAR_FILMS_FAIL,
      payload,
    };
    expect(fetchSimilarFilmsFail(payload)).toEqual(expectedAction);
  });
})
