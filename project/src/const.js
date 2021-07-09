const RatingTitle = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

export const DisplayCards = {
  MAIN_PAGE: 8,
  MORE_LIKE_THIS: 4,
};

export const DEFAULT_GENRE_TYPE = 'All genres';

export const OPEN_PREVIEW_DELAY = 1000;

export const genreTypes = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const CatalogTitle = {
  CATALOG: 'Catalog',
  MORE_LIKE_THIS: 'More like this',
  MY_LIST: 'My list',
};

export const AppRoute = {
  ROOT: '/',
  FAVORITES: '/mylist',
  LOGIN: '/login',
  FILM: '/film/:id',
  REVIEW: '/film/:id/review',
  PLAYER: '/player/:id',
};

export const ApiRoute = {
  ROOT: '/',
  FILMS: '/films',
  FILM: '/films/:id',
  SIMILAR: '/films/:id/similar',
  PROMO: '/promo',
  GET_FAVORITE: '/favorite',
  POST_FAVORITE: '/favorite/:film_id/:status',
  GET_COMMENTS: '/comments/:film_id',
  POST_COMMENT: '/comments/:film_id',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const HeaderClass = {
  FILM_CARD: 'film-card__head',
  USER_PAGE: 'user-page__head',
};

export const NumerableRating = {
  0: RatingTitle.BAD,
  1: RatingTitle.BAD,
  2: RatingTitle.BAD,
  3: RatingTitle.NORMAL,
  4: RatingTitle.NORMAL,
  5: RatingTitle.GOOD,
  6: RatingTitle.GOOD,
  7: RatingTitle.GOOD,
  8: RatingTitle.VERY_GOOD,
  9: RatingTitle.VERY_GOOD,
  10: RatingTitle.AWESOME,
};

export const AuthStatus = {
  AUTHORIZED: 'AUTHORIZED',
  NO_AUTHORIZED: 'NO_AUTHORIZED',
};
