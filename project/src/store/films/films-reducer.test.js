import {filmsReducer} from './films-reducer.js';
import {
  fetchFilmsFail,
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchPromoFilmFail,
  fetchPromoFilmSuccess, updateFilm
} from './films-action.js';
import {
  adaptedFilm,
  film,
  films,
  filmsByGenre,
  filmsList, updatedClientFilm,
  updatedFilmsByGenre,
  updatedFilmsList, updatedServerFilm
} from '../../mocks/mock-data.js';
import {getFilmsLists} from '../store-utils.js';

describe('films reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      filmsList: {},
      filmsByGenre: {},
      promoFilm: {},
      waitingResponse: false,
      errorMessage: '',
    };
  });
  it('Without parameters return initial state', () => {
    expect(filmsReducer(undefined, {})).toEqual(state);
  });
  it('Action \'fetchFilmsStart\' return correct state', () => {
    const expectedState = {
      filmsList: {},
      filmsByGenre: {},
      promoFilm: {},
      waitingResponse: true,
      errorMessage: '',
    }
    expect(filmsReducer(state, fetchFilmsStart())).toEqual(expectedState);
  });
  it('Action \'fetchFilmsSuccess\' return correct state', () => {
    const [filmsList, filmsByGenre] = getFilmsLists(films);
    const expectedState = {
      filmsList,
      filmsByGenre,
      promoFilm: {},
      waitingResponse: false,
      errorMessage: '',
    }
    expect(filmsReducer(state, fetchFilmsSuccess(films))).toEqual(expectedState);
  });
  it('Action \'fetchFilmsFail\' return correct state', () => {
    const errorMessage = 'bad request error message';
    const expectedState = {
      filmsList: {},
      filmsByGenre: {},
      promoFilm: {},
      waitingResponse: false,
      errorMessage,
    }
    expect(filmsReducer(state, fetchFilmsFail(errorMessage))).toEqual(expectedState);
  });
  it('Action \'fetchPromoFilmSuccess\' return correct state', () => {
    const expectedState = {
      filmsList: {},
      filmsByGenre: {},
      promoFilm: adaptedFilm,
      waitingResponse: false,
      errorMessage: '',
    }
    expect(filmsReducer(state, fetchPromoFilmSuccess(film))).toEqual(expectedState);
  });
  it('Action \'fetchPromoFilmFail\' return correct state', () => {
    const errorMessage = 'bad request error message';
    const expectedState = {
      filmsList: {},
      filmsByGenre: {},
      promoFilm: {},
      waitingResponse: false,
      errorMessage,
    }
    expect(filmsReducer(state, fetchPromoFilmFail(errorMessage))).toEqual(expectedState);
  });
  it('Action \'updateFilm\' return correct state', () => {
    const initialState = {
      filmsList: filmsList,
      filmsByGenre: filmsByGenre,
      promoFilm: adaptedFilm,
      waitingResponse: false,
      errorMessage: '',
    };
    const expectedState = {
      filmsList: updatedFilmsList,
      filmsByGenre: updatedFilmsByGenre,
      promoFilm: updatedClientFilm,
      waitingResponse: false,
      errorMessage: '',
    }
    expect(filmsReducer(initialState, updateFilm(updatedServerFilm))).toEqual(expectedState);
  });
})
