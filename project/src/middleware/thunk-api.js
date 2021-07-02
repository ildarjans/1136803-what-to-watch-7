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
