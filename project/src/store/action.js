export const ActionType = {
  CHANGE_CURRENT_GENRE: 'CHANGE_CURRENT_GENRE',
  FILMS_LOADING_START: 'FILMS_LOADING_START',
  FILMS_LOADING_SUCCESS: 'FILMS_LOADING_SUCCESS',
  FILMS_LOADING_FAIL: 'FILMS_LOADING_FAIL',
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
};
