
export const selectFilmIdFromRoute = (props) => props.match.params.id;

export const selectFilmsByGenre = ({filmsByGenre, currentGenre}) => filmsByGenre[currentGenre];

export const selectFilmById = ({filmsList}, id) => filmsList[id];

export const selectFavoriteList = ({favoriteList}) => favoriteList;

export const selectAuthorizationStatus = ({authorizationStatus}) => authorizationStatus;

export const selectUser = ({user}) => user;

export const selectCurrentGenre = ({currentGenre}) => currentGenre;

export const selectAllGenres = ({filmsByGenre}) => Object.keys(filmsByGenre);

export const selectReviews = ({reviews}) => reviews;

export const selectPostReviewErrorMessage = ({postFilmReviewErrorMessage}) => postFilmReviewErrorMessage;
