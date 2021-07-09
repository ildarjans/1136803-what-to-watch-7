import {ApiRoute, AppRoute} from '../const.js';
import {ActionCreator} from '../store/action.js';

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.filmsLoadingStart());
  return api
    .get(ApiRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.filmsLoadingSuccess(data)))
    .catch((err) => dispatch(ActionCreator.filmsLoadingFail(err)));
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
  dispatch(ActionCreator.favoritesLoadingStart());
  return api
    .get(ApiRoute.GET_FAVORITE)
    .then(({data}) => dispatch(ActionCreator.favoritesLoadingSuccess(data)))
    .catch((err) => dispatch(ActionCreator.favoritesLoadingFail(err)));
};

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.similarFilmsLoadingStart());
  return api
    .get(ApiRoute.SIMILAR.replace(':id', id))
    .then(({data}) => dispatch(ActionCreator.similarFilmsLoadingSuccess(data)))
    .catch((err) => dispatch(ActionCreator.similarFilmsLoadingFail(err)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.reviewsLoadingStart());
  return api
    .get(ApiRoute.GET_COMMENTS.replace(':film_id', id))
    .then(({data}) => dispatch(ActionCreator.reviewsLoadingSuccess(data)))
    .catch((err) => dispatch(ActionCreator.reviewsLoadingFail(err)));
};
export const postReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.reviewUploadingStart());
  return api
    .post(ApiRoute.POST_COMMENT.replace(':film_id0', id), {rating, comment})
    .then(({data}) => dispatch(ActionCreator.reviewsLoadingSuccess(data)))
    .then(() => dispatch(ActionCreator.reviewUploadingSuccess()))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FILM.replace(':id', id))))
    .catch((err) => {
      dispatch(ActionCreator.reviewUploadingFail(err));
      dispatch(ActionCreator.redirectToRoute(AppRoute.REVIEW.replace(':id', id)));
    });
};
