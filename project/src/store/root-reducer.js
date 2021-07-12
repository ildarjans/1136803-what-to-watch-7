import {combineReducers} from 'redux';
import {favoritesReducer} from './favorites/favorites-reducer.js';
import {filmsReducer} from './films/films-reducer.js';
import {processReducer} from './process/process-reducer.js';
import {reviewsReducer} from './reviews/reviews-reducer.js';
import {similarFilmsReducer} from './similar-films/similar-films-reducer.js';
import {userReducer} from './user/user-reducer.js';

const NameSpace = {
  FAVORITES: 'FAVORITES',
  FILMS: 'FILMS',
  PROCESS: 'PROCESS',
  REVIEWS: 'REVIEWS',
  SIMILAR_FILMS: 'SIMILAR_FILMS',
  USER: 'USER',
};

export const rootReducer = combineReducers({
  [NameSpace.FAVORITES]: favoritesReducer,
  [NameSpace.FILMS]: filmsReducer,
  [NameSpace.PROCESS]: processReducer,
  [NameSpace.REVIEWS]: reviewsReducer,
  [NameSpace.SIMILAR_FILMS]: similarFilmsReducer,
  [NameSpace.USER]: userReducer,
});
