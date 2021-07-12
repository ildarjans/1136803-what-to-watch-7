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
  waitingAddReviewResponse: false,
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
    case (ActionType.FETCH_FILMS_START): {
      return extend(state, {
        waitingFilmsResponse: true,
        fetchFilmsError: null,
      });
    }
    case (ActionType.FETCH_FILMS_SUCCESS): {
      const [filmsList, filmsByGenre] = getFilmsLists(action.payload);
      return extend(state, {
        filmsList,
        filmsByGenre,
        waitingFilmsResponse: false,
      });
    }
    case (ActionType.FETCH_FILMS_FAIL): {
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
    case (ActionType.FETCH_FAVORITES_START): {
      return extend(state, {
        waitingFavoritesResponse: true,
        fetchFavoritesError: null,
      });
    }
    case (ActionType.FETCH_FAVORITES_SUCCESS): {
      return extend(state, {
        waitingFavoritesResponse: false,
        favoriteList: getFavoriteFilms(action.payload),
      });
    }
    case (ActionType.FETCH_FAVORITES_FAIL): {
      return extend(state, {
        waitingFavoritesResponse: false,
        fetchFavoritesError: action.payload,
      });
    }
    case (ActionType.FETCH_SIMILAR_FILMS_START): {
      return extend(state, {
        waitingSimilarFilmsResponse: true,
        fetchSimilarFilmsError: null,
      });
    }
    case (ActionType.FETCH_SIMILAR_FILMS_SUCCESS): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        similarFilms: action.payload.map(adaptFilmToClient),
      });
    }
    case (ActionType.FETCH_SIMILAR_FILMS_FAIL): {
      return extend(state, {
        waitingSimilarFilmsResponse: false,
        fetchSimilarFilmsError: action.payload,
      });
    }
    case (ActionType.FETCH_REVIEWS_START): {
      return extend(state, {
        waitingReviewsResponse: true,
        fetchReviewsError: null,
      });
    }
    case (ActionType.FETCH_REVIEWS_SUCCESS): {
      return extend(state, {
        waitingReviewsResponse: false,
        reviews: action.payload,
      });
    }
    case (ActionType.FETCH_REVIEWS_FAIL): {
      return extend(state, {
        waitingReviewsResponse: false,
        fetchReviewsError: action.payload,
      });
    }
    case (ActionType.ADD_REVIEW_START): {
      return extend(state, {
        waitingAddReviewResponse: true,
        postFilmReviewErrorMessage: '',
      });
    }
    case (ActionType.ADD_REVIEW_SUCCESS): {
      return extend(state, {
        waitingAddFilmReviewResponse: false,
      });
    }
    case (ActionType.ADD_REVIEW_FAIL): {
      return extend(state, {
        waitingAddFilmReviewResponse: false,
        postFilmReviewErrorMessage: action.payload.message,
      });
    }
  }
  return state;
};
