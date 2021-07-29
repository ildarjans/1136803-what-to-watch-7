import {ActionType} from '../action-type.js';
import {
  fetchFilmsFail,
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchPromoFilmFail,
  fetchPromoFilmSuccess, updateFilm
} from './films-action.js';

describe('films action', () => {
  it('Action creator \'fetchFilmsStart\' return correct action', () => {
    const exceptedAction = {
      type: ActionType.FETCH_FILMS_START,
    };
    expect(fetchFilmsStart()).toEqual(exceptedAction);
  });
  it('Action creator \'fetchFilmsSuccess\' return correct action', () => {
    const payload = 'films array';
    const exceptedAction = {
      type: ActionType.FETCH_FILMS_SUCCESS,
      payload,
    };
    expect(fetchFilmsSuccess(payload)).toEqual(exceptedAction);
  });
  it('Action creator \'fetchFilmsFail\' return correct action', () => {
    const payload = 'bad request error message';
    const exceptedAction = {
      type: ActionType.FETCH_FILMS_FAIL,
      payload,
    };
    expect(fetchFilmsFail(payload)).toEqual(exceptedAction);
  });
  it('Action creator \'fetchPromoFilmSuccess\' return correct action', () => {
    const exceptedAction = {
      type: ActionType.FETCH_PROMO_FILM_SUCCESS,
    };
    expect(fetchPromoFilmSuccess()).toEqual(exceptedAction);
  });
  it('Action creator \'fetchPromoFilmFail\' return correct action', () => {
    const payload = 'bad request error message';
    const exceptedAction = {
      type: ActionType.FETCH_PROMO_FILM_FAIL,
      payload,
    };
    expect(fetchPromoFilmFail(payload)).toEqual(exceptedAction);
  });
  it('Action creator \'updateFilm\' return correct action', () => {
    const payload = 'films array';
    const exceptedAction = {
      type: ActionType.UPDATE_FILM,
      payload,
    };
    expect(updateFilm(payload)).toEqual(exceptedAction);
  });
});
