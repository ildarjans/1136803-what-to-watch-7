import {ApiRoute} from '../const.js';
import {ActionCreator} from '../store/action.js';

export const fetchFilms = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.filmsLoadingStart());
  return api
    .get(ApiRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.filmsLoadingSuccess(data)))
    .catch((err) => dispatch(ActionCreator.filmsLoadingFail(err)));
};
