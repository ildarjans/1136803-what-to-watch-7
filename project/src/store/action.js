export const ActionType = {
  AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS',
  AUTHORIZATION_FAIL: 'AUTHORIZATION_FAIL',
  CHANGE_CURRENT_GENRE: 'CHANGE_CURRENT_GENRE',
  LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAIL: 'LOGOUT_USER_FAIL',
  FAVORITES_LOADING_START: 'FAVORITES_LOADING_START',
  FAVORITES_LOADING_SUCCESS: 'FAVORITES_LOADING_SUCCESS',
  FAVORITES_LOADING_FAIL: 'FAVORITES_LOADING_FAIL',
  FILMS_LOADING_START: 'FILMS_LOADING_START',
  FILMS_LOADING_SUCCESS: 'FILMS_LOADING_SUCCESS',
  FILMS_LOADING_FAIL: 'FILMS_LOADING_FAIL',
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
};

