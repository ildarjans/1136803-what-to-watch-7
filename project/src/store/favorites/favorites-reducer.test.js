import {favoritesReducer} from './favorites-reducer.js';
import {
  addToFavoritesFail,
  addToFavoritesSuccess,
  fetchFavoritesFail,
  fetchFavoritesStart,
  fetchFavoritesSuccess
} from './favorites-action.js';
import {adaptedFilms, films} from '../../mocks/mock-data.js';

describe('favorites reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      favoritesList: [],
      waitingResponse: false,
      errorMessage: '',
    };
  });
  it('Without parameters return initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(state);
  });
  it('Action \'fetchFavoritesStart\' return correct state', () => {
    const expectedState = {
      favoritesList: [],
      waitingResponse: true,
      errorMessage: '',
    };
    expect(favoritesReducer(state, fetchFavoritesStart())).toEqual(expectedState);
  });
  it('Action \'fetchFavoritesSuccess\' return correct state', () => {
    const payload = films;
    const expectedState = {
      favoritesList: adaptedFilms,
      waitingResponse: false,
      errorMessage: '',
    };
    expect(favoritesReducer(state, fetchFavoritesSuccess(payload))).toEqual(expectedState);
  });
  it('Action \'fetchFavoritesFail\' return correct state', () => {
    const errorMessage = 'bad request error message';
    const expectedState = {
      favoritesList: [],
      waitingResponse: false,
      errorMessage,
    };
    expect(favoritesReducer(state, fetchFavoritesFail(errorMessage))).toEqual(expectedState);
  });
  it('Action \'addToFavoritesSuccess\' return correct state', () => {
    const expectedState = {
      favoritesList: [],
      waitingResponse: false,
      errorMessage: '',
    };
    expect(favoritesReducer(state, addToFavoritesSuccess())).toEqual(expectedState);
  });
  it('Action \'addToFavoritesFail\' return correct state', () => {
    const errorMessage = 'bad request error message';
    const expectedState = {
      favoritesList: [],
      waitingResponse: false,
      errorMessage,
    };
    expect(favoritesReducer(state, addToFavoritesFail(errorMessage))).toEqual(expectedState);
  });
});
