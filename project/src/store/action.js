export const ActionType = {
  AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS',
  AUTHORIZATION_FAIL: 'AUTHORIZATION_FAIL',
  CHANGE_CURRENT_GENRE: 'CHANGE_CURRENT_GENRE',
  FETCH_REVIEWS_START: 'FETCH_REVIEWS_START',
  FETCH_REVIEWS_SUCCESS: 'FETCH_REVIEWS_SUCCESS',
  FETCH_REVIEWS_FAIL: 'FETCH_REVIEWS_FAIL',
  ADD_REVIEW_START: 'ADD_REVIEW_START',
  ADD_REVIEW_SUCCESS: 'ADD_REVIEW_SUCCESS',
  ADD_REVIEW_FAIL: 'ADD_REVIEW_FAIL',
  LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
  FETCH_FAVORITES_START: 'FETCH_FAVORITES_START',
  FETCH_FAVORITES_SUCCESS: 'FETCH_FAVORITES_SUCCESS',
  FETCH_FAVORITES_FAIL: 'FETCH_FAVORITES_FAIL',
  FETCH_FILMS_START: 'FETCH_FILMS_START',
  FETCH_FILMS_SUCCESS: 'FETCH_FILMS_SUCCESS',
  FETCH_FILMS_FAIL: 'FETCH_FILMS_FAIL',
  FETCH_SIMILAR_FILMS_START: 'FETCH_SIMILAR_FILMS_START',
  FETCH_SIMILAR_FILMS_SUCCESS: 'FETCH_SIMILAR_FILMS_SUCCESS',
  FETCH_SIMILAR_FILMS_FAIL: 'FETCH_SIMILAR_FILMS_FAIL',
  SEND_AUTHORIZATION_REQUEST: 'SEND_AUTHORIZATION_REQUEST',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
  SET_USER_LOGIN_PROFILE: 'SET_USER_LOGIN_PROFILE',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_CURRENT_GENRE,
    payload: genre,
  }),
  fetchFilmsStart: () => ({
    type: ActionType.FETCH_FILMS_START,
  }),
  fetchFilmsSuccess: (films) => ({
    type: ActionType.FETCH_FILMS_SUCCESS,
    payload: films,
  }),
  fetchFilmsFail: (err) => ({
    type: ActionType.FETCH_FILMS_FAIL,
    payload: err,
  }),
  authorizationSuccess: () => ({
    type: ActionType.AUTHORIZATION_SUCCESS,
  }),
  authorizationFail: (err) => ({
    type: ActionType.AUTHORIZATION_FAIL,
    payload: err,
  }),
  sendAuthorizationRequest: () => ({
    type: ActionType.SEND_AUTHORIZATION_REQUEST,
  }),
  setAuthorizationStatus: (authStatus) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: authStatus,
  }),
  setUserLoginProfile: (userInfo) => ({
    type: ActionType.SET_USER_LOGIN_PROFILE,
    payload: userInfo,
  }),
  fetchSimilarFilmsStart: () => ({
    type: ActionType.FETCH_SIMILAR_FILMS_START,
  }),
  fetchSimilarFilmsSuccess: (films) => ({
    type: ActionType.FETCH_SIMILAR_FILMS_SUCCESS,
    payload: films,
  }),
  fetchSimilarFilmsFail: (err) => ({
    type: ActionType.FETCH_SIMILAR_FILMS_FAIL,
    payload: err,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  logoutUserSuccess: () => ({
    type: ActionType.LOGOUT_USER_SUCCESS,
  }),
  logoutUserFail: (err) => ({
    type: ActionType.LOGOUT_USER_FAIL,
    payload: err,
  }),
  fetchFavoritesStart: () => ({
    type: ActionType.FETCH_FAVORITES_START,
  }),
  fetchFavoritesSuccess: (films) => ({
    type: ActionType.FETCH_FAVORITES_SUCCESS,
    payload: films,
  }),
  fetchFavoritesFail: (err) => ({
    type: ActionType.FETCH_FAVORITES_FAIL,
    payload: err,
  }),
  fetchReviewsStart: () => ({
    type: ActionType.FETCH_REVIEWS_START,
  }),
  fetchReviewsSuccess: (reviews) => ({
    type: ActionType.FETCH_REVIEWS_SUCCESS,
    payload: reviews,
  }),
  fetchReviewsFail: (err) => ({
    type: ActionType.FETCH_REVIEWS_FAIL,
    payload: err,
  }),
  addReviewStart: () => ({
    type: ActionType.ADD_REVIEW_START,
  }),
  addReviewSuccess: () => ({
    type: ActionType.ADD_REVIEW_SUCCESS,
  }),
  addReviewFail: (err) => ({
    type: ActionType.ADD_REVIEW_FAIL,
    payload: err,
  }),
};

