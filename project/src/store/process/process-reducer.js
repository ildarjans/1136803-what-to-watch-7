import {DEFAULT_GENRE_TYPE} from '../../const.js';
import {ActionType} from '../action-type.js';
import {extend} from '../../utils.js';

const initialState = {
  currentGenre: DEFAULT_GENRE_TYPE,
};

export const processReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CURRENT_GENRE):
      return extend(state, {currentGenre: action.payload});
  }
  return state;
};
