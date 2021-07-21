import {similarFilmsReducer} from './similar-films-reducer.js';
import {fetchSimilarFilmsFail, fetchSimilarFilmsStart, fetchSimilarFilmsSuccess} from './similar-films-action.js';
import {adaptedFilms, films} from '../../mocks/mock-data.js';

const initialState = {
  waitingResponse: false,
  errorMessage: '',
  similarFilms: [],
};

describe('similar-films-reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      waitingResponse: false,
      errorMessage: '',
      similarFilms: [],
    };
  });
  it('Without parameters return initial state', () => {
    expect(similarFilmsReducer(undefined, {})).toEqual(state);
  });
  it('Action \'fetchSimilarFilmsStart\' return correct state', () => {
    const expectedState = {
      waitingResponse: true,
      errorMessage: '',
      similarFilms: [],
    };
    expect(similarFilmsReducer(state, fetchSimilarFilmsStart())).toEqual(expectedState);
  });
  it('Action \'fetchSimilarFilmsSuccess\' return correct state', () => {
    const similarFilms = films;
    const expectedState = {
      waitingResponse: false,
      errorMessage: '',
      similarFilms: adaptedFilms,
    };
    expect(similarFilmsReducer(state, fetchSimilarFilmsSuccess(similarFilms))).toEqual(expectedState);
  });
  it('Action \'fetchSimilarFilmsFail\' return correct state', () => {
    const errorMessage = 'bad request error message';
    const expectedState = {
      waitingResponse: false,
      errorMessage,
      similarFilms: [],
    };
    expect(similarFilmsReducer(state, fetchSimilarFilmsFail(errorMessage))).toEqual(expectedState);
  });


})
