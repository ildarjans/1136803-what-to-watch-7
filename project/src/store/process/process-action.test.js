import {changeGenre, redirectToRoute} from './process-action.js';
import {ActionType} from '../action-type.js';

describe('process action', () => {
  it('Action creator \'changeGenre\' return correct action', () => {
    const payload = 'comedy';
    const expectedAction = {
      type: ActionType.CHANGE_CURRENT_GENRE,
      payload,
    };
    expect(changeGenre(payload)).toEqual(expectedAction);
  });
  it('Action creator \'redirectToRoute\' return correct action', () => {
    const payload = '/player/film/3';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload,
    };
    expect(redirectToRoute(payload)).toEqual(expectedAction);
  });
});
