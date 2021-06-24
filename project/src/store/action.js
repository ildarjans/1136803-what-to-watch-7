export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS: 'GET_FILMS',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films,
  }),
};
