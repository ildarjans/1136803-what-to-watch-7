
export const selectPromoFilm = ({FILMS}) => FILMS.promoFilm;

export const selectFilmsByGenre = ({FILMS, PROCESS}) => FILMS.filmsByGenre[PROCESS.currentGenre];

export const selectFilmById = ({FILMS}, id) => FILMS.filmsList[id];

export const selectFavoritesList = ({FAVORITES}) => FAVORITES.favoritesList;

export const selectAuthorizationStatus = ({USER}) => USER.authorizationStatus;

export const selectUser = ({USER}) => USER.user;

export const selectCurrentGenre = ({PROCESS}) => PROCESS.currentGenre;

export const selectAllGenres = ({FILMS}) => Object.keys(FILMS.filmsByGenre);

export const selectReviews = ({REVIEWS}) => REVIEWS.reviews;

export const selectPostReviewErrorMessage = ({REVIEWS}) => REVIEWS.postErrorMessage;

export const selectSimilarFilms = ({SIMILAR_FILMS}) => SIMILAR_FILMS.similarFilms;
