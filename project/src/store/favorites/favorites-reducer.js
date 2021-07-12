import {ActionType} from '../action-type.js';
import {extend} from '../../utils.js';
import {getFavoriteFilms} from '../store-utils.js';

const initialState = {
  // TODO rename to favoritesList
  favoriteList: [],
  waitingFavoritesResponse: false,
  fetchFavoritesError: null,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.FETCH_FAVORITES_START): {
      return extend(state, {
        waitingFavoritesResponse: true,
        fetchFavoritesError: null,
      });
    }
    case (ActionType.FETCH_FAVORITES_SUCCESS): {
      return extend(state, {
        waitingFavoritesResponse: false,
        favoriteList: getFavoriteFilms(action.payload),
      });
    }
    case (ActionType.FETCH_FAVORITES_FAIL): {
      return extend(state, {
        waitingFavoritesResponse: false,
        fetchFavoritesError: action.payload,
      });
    }
  }
  return state;
};
