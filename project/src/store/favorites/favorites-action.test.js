import {ActionType} from '../action-type.js';
import {
  addToFavoritesFail,
  addToFavoritesSuccess,
  fetchFavoritesFail,
  fetchFavoritesStart,
  fetchFavoritesSuccess
} from './favorites-action.js';

describe('favorites action', () => {
  it('Action creator \'fetchFavoritesStart\' return correct action', () => {
    const expectedAction = {
      type: ActionType.FETCH_FAVORITES_START,
    };
    expect(fetchFavoritesStart()).toEqual(expectedAction);
  });
  it('Action creator \'fetchFavoritesSuccess\' return correct action', () => {
    const payload = 'films array';
    const expectedAction = {
      type: ActionType.FETCH_FAVORITES_SUCCESS,
      payload,
    };
    expect(fetchFavoritesSuccess(payload)).toEqual(expectedAction);
  });
  it('Action creator \'fetchFavoritesFail\' return correct action', () => {
    const payload = 'bad request error message';
    const expectedAction = {
      type: ActionType.FETCH_FAVORITES_FAIL,
      payload: payload,
    };
    expect(fetchFavoritesFail(payload)).toEqual(expectedAction);
  });
  it('Action creator \'addToFavoritesSuccess\' return correct action', () => {
    const expectedAction = {
      type: ActionType.ADD_TO_FAVORITES_SUCCESS,
    };
    expect(addToFavoritesSuccess()).toEqual(expectedAction);
  });
  it('Action creator \'addToFavoritesFail\' return correct action', () => {
    const payload = 'bad request error message';
    const expectedAction = {
      type: ActionType.ADD_TO_FAVORITES_FAIL,
      payload: payload,
    };
    expect(addToFavoritesFail(payload)).toEqual(expectedAction);
  });
});
