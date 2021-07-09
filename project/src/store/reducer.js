import {AuthStatus, DEFAULT_GENRE_TYPE} from '../const.js';
import {ActionType} from './action.js';
import {adaptFilmToClient, adaptUserToClient, extend} from '../utils.js';
import {getFavoriteFilms, getFilmsLists} from './store-utils.js';

const initialState = {
  currentGenre: DEFAULT_GENRE_TYPE,
  authorizationStatus: AuthStatus.NO_AUTHORIZED,
  filmsList: [],
  filmsByGenre: {},
  favoriteList: [],
  waitingAuthorizationResponse: false,
  waitingReviewsResponse: false,
  waitingPostFilmReviewResponse: false,
  waitingFilmsResponse: false,
  waitingFavoritesResponse: false,
  waitingSimilarFilmsResponse: false,
  authorizationError: null,
  fetchReviewsError: null,
  fetchFilmsError: null,
  fetchFavoritesError: null,
  fetchSimilarFilmsError: null,
  postFilmReviewErrorMessage: '',
  user: {},
  similarFilms: [],
  reviews: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CURRENT_GENRE):
      return extend(state, {currentGenre: action.payload});
    case (ActionType.FILMS_LOADING_START): {
      return extend(state, {
        waitingFilmsResponse: true,
        fetchFilmsError: null,
      });
    }
    case (ActionType.FILMS_LOADING_SUCCESS): {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      return extend(state, {
        filmsList,
        filmsByGenre,
        waitingFilmsResponse: false,
      });
    }
    case (ActionType.FILMS_LOADING_FAIL): {
      return extend(state, {
        fetchFilmsError: action.payload,
        waitingFilmsResponse: false,
      });
    }
    case (ActionType.SEND_AUTHORIZATION_REQUEST): {
      return extend(state, {
        waitingAuthorizationResponse: true,
        authorizationError: null,
      });
    }
    case (ActionType.SET_AUTHORIZATION_STATUS): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: action.payload,
      });
    }
    case (ActionType.AUTHORIZATION_SUCCESS): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: AuthStatus.AUTHORIZED,
        authorizationError: null,
      });
    }
    case (ActionType.AUTHORIZATION_FAIL): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: AuthStatus.NO_AUTHORIZED,
        authorizationError: action.payload,
        user: {},
      });
    }
    case (ActionType.SET_USER_LOGIN_PROFILE): {
      return extend(state, {
        user: adaptUserToClient(action.payload),
      });
    }
    case (ActionType.LOGOUT_USER_SUCCESS): {
      return extend(state, {
        authorizationStatus: AuthStatus.NO_AUTHORIZED,
        user: {},
      });
    }
    case (ActionType.LOGOUT_USER_FAIL): {
      return extend(state, {
        authorizationError: action.payload,
      });
    }
    case (ActionType.FAVORITES_LOADING_START): {
      return extend(state, {
        waitingFavoritesResponse: true,
        fetchFavoritesError: null,
      });
    }
    case (ActionType.FAVORITES_LOADING_SUCCESS): {
      return extend(state, {
        waitingFavoritesResponse: false,
        favoriteList: getFavoriteFilms(action.payload),
      });
    }
    case (ActionType.FAVORITES_LOADING_FAIL): {
      return extend(state, {
        waitingFavoritesResponse: false,
        fetchFavoritesError: action.payload,
      });
    }
    case (ActionType.SIMILAR_FILMS_LOADING_START): {
      return extend(state, {
        waitingSimilarFilmsResponse: true,
        fetchSimilarFilmsError: null,
      });
    }
    case (ActionType.SIMILAR_FILMS_LOADING_SUCCESS): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        similarFilms: action.payload.map(adaptFilmToClient),
      });
    }
    case (ActionType.SIMILAR_FILMS_LOADING_FAIL): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        fetchSimilarFilmsError: action.payload,
      });
    }
    case (ActionType.REVIEWS_LOADING_START): {
      return extend(state, {
        waitingReviewsResponse: true,
        fetchReviewsError: null,
      });
    }
    case (ActionType.REVIEWS_LOADING_SUCCESS): {
      return extend(state, {
        waitingReviewsResponse: false,
        reviews: action.payload,
      });
    }
    case (ActionType.REVIEWS_LOADING_FAIL): {
      return extend(state, {
        waitingReviewsResponse: false,
        fetchReviewsError: action.payload,
      });
    }
    case (ActionType.REVIEW_UPLOADING_START): {
      return extend(state, {
        waitingPostFilmReviewResponse: true,
        postFilmReviewErrorMessage: '',
      });
    }
    case (ActionType.REVIEW_UPLOADING_SUCCESS): {
      return extend(state, {
        waitingPostFilmReviewResponse: false,
      });
    }
    case (ActionType.REVIEW_UPLOADING_FAIL): {
      return extend(state, {
        waitingPostFilmReviewResponse: false,
        postFilmReviewErrorMessage: action.payload.message,
      });
    }
  }
  return state;
};
