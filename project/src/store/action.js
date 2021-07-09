export const ActionType = {
  AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS',
  AUTHORIZATION_FAIL: 'AUTHORIZATION_FAIL',
  CHANGE_CURRENT_GENRE: 'CHANGE_CURRENT_GENRE',
  REVIEWS_LOADING_START: 'REVIEWS_LOADING_START',
  REVIEWS_LOADING_SUCCESS: 'REVIEWS_LOADING_SUCCESS',
  REVIEWS_LOADING_FAIL: 'REVIEWS_LOADING_FAIL',
  REVIEW_UPLOADING_START: 'REVIEW_UPLOADING_START',
  REVIEW_UPLOADING_SUCCESS: 'REVIEW_UPLOADING_SUCCESS',
  REVIEW_UPLOADING_FAIL: 'REVIEW_UPLOADING_FAIL',
  LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
  FAVORITES_LOADING_START: 'FAVORITES_LOADING_START',
  FAVORITES_LOADING_SUCCESS: 'FAVORITES_LOADING_SUCCESS',
  FAVORITES_LOADING_FAIL: 'FAVORITES_LOADING_FAIL',
  FILMS_LOADING_START: 'FILMS_LOADING_START',
  FILMS_LOADING_SUCCESS: 'FILMS_LOADING_SUCCESS',
  FILMS_LOADING_FAIL: 'FILMS_LOADING_FAIL',
  SIMILAR_FILMS_LOADING_START: 'SIMILAR_FILMS_LOADING_START',
  SIMILAR_FILMS_LOADING_SUCCESS: 'SIMILAR_FILMS_LOADING_SUCCESS',
  SIMILAR_FILMS_LOADING_FAIL: 'SIMILAR_FILMS_LOADING_FAIL',
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
  filmsLoadingStart: () => ({
    type: ActionType.FILMS_LOADING_START,
  }),
  filmsLoadingSuccess: (films) => ({
    type: ActionType.FILMS_LOADING_SUCCESS,
    payload: films,
  }),
  filmsLoadingFail: (err) => ({
    type: ActionType.FILMS_LOADING_FAIL,
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
  similarFilmsLoadingStart: () => ({
    type: ActionType.SIMILAR_FILMS_LOADING_START,
  }),
  similarFilmsLoadingSuccess: (films) => ({
    type: ActionType.SIMILAR_FILMS_LOADING_SUCCESS,
    payload: films,
  }),
  similarFilmsLoadingFail: (err) => ({
    type: ActionType.SIMILAR_FILMS_LOADING_FAIL,
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
  favoritesLoadingStart: () => ({
    type: ActionType.FAVORITES_LOADING_START,
  }),
  favoritesLoadingSuccess: (films) => ({
    type: ActionType.FAVORITES_LOADING_SUCCESS,
    payload: films,
  }),
  favoritesLoadingFail: (err) => ({
    type: ActionType.FAVORITES_LOADING_FAIL,
    payload: err,
  }),
  reviewsLoadingStart: () => ({
    type: ActionType.REVIEWS_LOADING_START,
  }),
  reviewsLoadingSuccess: (reviews) => ({
    type: ActionType.REVIEWS_LOADING_SUCCESS,
    payload: reviews,
  }),
  reviewsLoadingFail: (err) => ({
    type: ActionType.REVIEWS_LOADING_FAIL,
    payload: err,
  }),
  reviewUploadingStart: () => ({
    type: ActionType.REVIEW_UPLOADING_START,
  }),
  reviewUploadingSuccess: () => ({
    type: ActionType.REVIEW_UPLOADING_SUCCESS,
  }),
  reviewUploadingFail: (err) => ({
    type: ActionType.REVIEW_UPLOADING_FAIL,
    payload: err,
  }),
};

