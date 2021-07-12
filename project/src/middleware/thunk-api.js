import {ApiRoute, AppRoute} from '../const.js';
import {ActionCreator} from '../store/action.js';

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.fetchFilmsStart());
  return api
    .get(ApiRoute.FETCH_FILMS)
    .then(({data}) => dispatch(ActionCreator.fetchFilmsSuccess(data)))
    .catch((err) => dispatch(ActionCreator.fetchFilmsFail(err)));
};

export const checkAuthUser = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.sendAuthorizationRequest());
  return api
    .get(ApiRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUserLoginProfile(data)))
    .then(() => dispatch(ActionCreator.authorizationSuccess()))
    .catch((err) => dispatch(ActionCreator.authorizationFail(err)));
};

export const loginUser = ({email, password}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.sendAuthorizationRequest());
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setUserLoginProfile(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.authorizationSuccess()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch((err) => {
      dispatch(ActionCreator.authorizationFail(err));
      dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    });
};

export const logoutUser = () => (dispatch, _getState, api) => (
  api
    .delete(ApiRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logoutUserSuccess());
    })
    .catch((err) => dispatch(ActionCreator.logoutUserFail(err)))
);

export const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.fetchFavoritesStart());
  return api
    .get(ApiRoute.FETCH_FAVORITES)
    .then(({data}) => dispatch(ActionCreator.fetchFavoritesSuccess(data)))
    .catch((err) => dispatch(ActionCreator.fetchFavoritesFail(err)));
};

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.fetchSimilarFilmsStart());
  return api
    .get(ApiRoute.FETCH_SIMILAR_FILMS.replace(':id', id))
    .then(({data}) => dispatch(ActionCreator.fetchSimilarFilmsSuccess(data)))
    .catch((err) => dispatch(ActionCreator.fetchSimilarFilmsFail(err)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.fetchReviewsStart());
  return api
    .get(ApiRoute.FETCH_REVIEWS.replace(':film_id', id))
    .then(({data}) => dispatch(ActionCreator.fetchReviewsSuccess(data)))
    .catch((err) => dispatch(ActionCreator.fetchReviewsFail(err)));
};

export const addReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.addReviewStart());
  return api
    .post(ApiRoute.ADD_REVIEW.replace(':film_id', id), {rating, comment})
    .then(({data}) => dispatch(ActionCreator.fetchReviewsSuccess(data)))
    .then(() => dispatch(ActionCreator.addReviewSuccess()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FILM.replace(':id', id))))
    .catch((err) => {
      dispatch(ActionCreator.addReviewFail(err));
      dispatch(ActionCreator.redirectToRoute(AppRoute.REVIEW.replace(':id', id)));
    });
};
