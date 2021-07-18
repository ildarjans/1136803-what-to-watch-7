import {ApiRoute, AppRoute} from '../const.js';
import {fetchFilmsFail, fetchFilmsStart, fetchFilmsSuccess} from '../store/films/films-action.js';
import {fetchFavoritesFail, fetchFavoritesStart, fetchFavoritesSuccess} from '../store/favorites/favorites-action.js';
import {redirectToRoute} from '../store/process/process-action.js';
import {
  authorizationFail,
  authorizationSuccess,
  logoutUserFail,
  logoutUserSuccess,
  sendAuthorizationRequest,
  setUserLoginProfile
} from '../store/user/user-action.js';
import {
  fetchSimilarFilmsFail,
  fetchSimilarFilmsStart,
  fetchSimilarFilmsSuccess
} from '../store/similar-films/similar-films-action.js';
import {
  addReviewFail,
  addReviewStart,
  addReviewSuccess,
  fetchReviewsFail,
  fetchReviewsStart,
  fetchReviewsSuccess
} from '../store/reviews/reviews-action.js';

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(fetchFilmsStart());
  return api
    .get(ApiRoute.FETCH_FILMS)
    .then(({data}) => dispatch(fetchFilmsSuccess(data)))
    .catch(({message}) => dispatch(fetchFilmsFail(message)));
};

export const checkAuthUser = () => (dispatch, _getState, api) => {
  dispatch(sendAuthorizationRequest());
  return api
    .get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(setUserLoginProfile(data)))
    .then(() => dispatch(authorizationSuccess()))
    .catch(({message}) => dispatch(authorizationFail(message)));
};

export const loginUser = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(sendAuthorizationRequest());
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUserLoginProfile(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(authorizationSuccess()))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(({message}) => {
      dispatch(authorizationFail(message));
      dispatch(redirectToRoute(AppRoute.LOGIN));
    });
};

export const logoutUser = () => (dispatch, _getState, api) => (
  api
    .delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(logoutUserSuccess());
    })
    .catch(({message}) => dispatch(logoutUserFail(message)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(fetchFavoritesStart());
  return api
    .get(ApiRoute.FETCH_FAVORITES)
    .then(({data}) => dispatch(fetchFavoritesSuccess(data)))
    .catch(({message}) => dispatch(fetchFavoritesFail(message)));
};

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => {
  dispatch(fetchSimilarFilmsStart());
  return api
    .get(ApiRoute.FETCH_SIMILAR_FILMS.replace(':id', id))
    .then(({data}) => dispatch(fetchSimilarFilmsSuccess(data)))
    .catch(({message}) => dispatch(fetchSimilarFilmsFail(message)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(fetchReviewsStart());
  return api
    .get(ApiRoute.FETCH_REVIEWS.replace(':film_id', id))
    .then(({data}) => dispatch(fetchReviewsSuccess(data)))
    .catch(({message}) => dispatch(fetchReviewsFail(message)));
};

export const addReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  dispatch(addReviewStart());
  return api
    .post(ApiRoute.ADD_REVIEW.replace(':film_id', id), {rating, comment})
    .then(({data}) => dispatch(fetchReviewsSuccess(data)))
    .then(() => dispatch(addReviewSuccess()))
    .then(() => dispatch(redirectToRoute(AppRoute.FILM.replace(':id', id))))
    .catch(({message}) => {
      dispatch(addReviewFail(message));
      dispatch(redirectToRoute(AppRoute.REVIEW.replace(':id', id)));
    });
};
