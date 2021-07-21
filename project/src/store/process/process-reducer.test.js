import {processReducer} from './process-reducer.js';
import {changeGenre} from './process-action.js';
import {DEFAULT_GENRE_TYPE} from '../../const.js';

describe('process action', () => {
  let state;
  beforeEach(() => {
    state = {
      currentGenre: DEFAULT_GENRE_TYPE,
    }
  });
  it('Without parameters return initial state', () => {
    expect(processReducer(undefined, {})).toEqual(state);
  });
  it('Action \'changeGenre\' return correct state', () => {
    const payload = 'drama'
    const expectedState = {
      currentGenre: payload,
    };
    expect(processReducer(state, changeGenre(payload))).toEqual(expectedState);
  });
});

