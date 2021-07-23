import MockAdapter from 'axios-mock-adapter';
import createAPI from '../services/api.js';
import {ActionType} from '../store/action-type.js';
import {
  addReview, addToFavorites,
  checkAuthUser,
  fetchFavorites,
  fetchFilms, fetchPromoFilm,
  fetchReviews,
  fetchSimilarFilms,
  loginUser,
  logoutUser
} from './thunk-api.js';
import {ApiRoute} from '../const.js';


describe('Async actions', () => {
  let api;
  beforeAll(() => {
    api = createAPI();
  });

  it('should correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFilmsLoader = fetchFilms();

    apiMock
      .onGet(ApiRoute.FETCH_FILMS)
      .reply(200, [{fake: true}]);

    return fetchFilmsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILMS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_FILMS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should failed API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFilmsLoader = fetchFilms();

    apiMock
      .onGet(ApiRoute.FETCH_FILMS)
      .reply(404, 'error message');

    return fetchFilmsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILMS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_FILMS_FAIL,
          payload: 'error message',
        });
      })
      .catch(() => {
      });
  });
  it('should correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthUserLoader = checkAuthUser();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthUserLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_LOGIN_PROFILE,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.AUTHORIZATION_SUCCESS,
        });
      });
  });
  it('should failed API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthUserLoader = checkAuthUser();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(404, 'error message');

    return checkAuthUserLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION_FAIL,
          payload: 'error message',
        });
      })
      .catch(() => {
      });
  });
  it('should correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authData = {email: 'example@hotmail.com', password: 'qwerty'};
    const loginUserLoader = loginUser(authData);

    apiMock
      .onPost(ApiRoute.LOGIN, authData)
      .reply(200, [{fake: true}]);

    return loginUserLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_LOGIN_PROFILE,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.AUTHORIZATION_SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/',
        });
      });
  });
  it('should failed API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authData = {email: 'example@hotmail.com', password: 'qwerty'};
    const loginUserLoader = loginUser(authData);

    apiMock
      .onPost(ApiRoute.LOGIN, authData)
      .reply(404, 'authorization fail message');

    return loginUserLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SEND_AUTHORIZATION_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION_FAIL,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/login',
        });
      })
      .catch(() => {
      });
  });
  it('should correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutUserLoader = logoutUser();

    apiMock
      .onDelete(ApiRoute.LOGOUT)
      .reply(200);

    return logoutUserLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT_USER_SUCCESS,
        });
      });
  });
  it('should failed API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutUserLoader = logoutUser();

    apiMock
      .onDelete(ApiRoute.LOGOUT)
      .reply(404, 'logout failed message');

    return logoutUserLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT_USER_FAIL,
          payload: 'logout failed message',
        });
      })
      .catch(() => {});
  });
  it('should correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(ApiRoute.FETCH_FAVORITES)
      .reply(200, [{fake: true}]);

    return fetchFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FAVORITES_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_FAVORITES_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should failed API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(ApiRoute.FETCH_FAVORITES)
      .reply(404, 'error message');

    return fetchFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FAVORITES_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_FAVORITES_FAIL,
          payload: 'error message',
        });

      })
      .catch(() => {});
  });
  it('should correct API call to GET /films/:id/similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const fetchSimilarFilmsLoader = fetchSimilarFilms(id);

    apiMock
      .onGet(ApiRoute.FETCH_SIMILAR_FILMS.replace(':id', id))
      .reply(200, [{fake: true}]);

    return fetchSimilarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_SIMILAR_FILMS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_SIMILAR_FILMS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should failed API call to GET /films/:id/similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const fetchSimilarFilmsLoader = fetchSimilarFilms(id);

    apiMock
      .onGet(ApiRoute.FETCH_SIMILAR_FILMS.replace(':id', id))
      .reply(404, 'error message');

    return fetchSimilarFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_SIMILAR_FILMS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_SIMILAR_FILMS_FAIL,
          payload: 'error message',
        });

      })
      .catch(() => {});
  });
  it('should correct API call to GET /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const fetchReviewsLoader = fetchReviews(id);

    apiMock
      .onGet(ApiRoute.FETCH_REVIEWS.replace(':film_id', id))
      .reply(200, [{fake: true}]);

    return fetchReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_REVIEWS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_REVIEWS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should failed API call to GET /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const fetchReviewsLoader = fetchReviews(id);

    apiMock
      .onGet(ApiRoute.FETCH_REVIEWS.replace(':film_id', id))
      .reply(404, 'error message');

    return fetchReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_REVIEWS_START,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.FETCH_REVIEWS_FAIL,
          payload: 'error message',
        });
      })
      .catch(() => {});
  });
  it('should correct API call to POST /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const review = {rating: 7, comment: 'highly recommended film'};
    const addReviewLoader = addReview(id, review);

    apiMock
      .onPost(ApiRoute.ADD_REVIEW.replace(':film_id', id), review)
      .reply(200, [{fake: true}]);

    return addReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_REVIEWS_SUCCESS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_REVIEW_SUCCESS,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/film/1',
        });
      });
  });
  it('should failed API call to POST /comments/:film_id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const review = {rating: 7, comment: 'highly recommended film'};
    const addReviewLoader = addReview(id, review);

    apiMock
      .onPost(ApiRoute.ADD_REVIEW.replace(':film_id', id), review)
      .reply(404, 'error message');

    return addReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_REVIEW_FAIL,
          payload: 'error message',
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/film/1/review',
        });
      })
      .catch(() => {});
  });
  it('should correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(ApiRoute.FETCH_PROMO)
      .reply(200, [{fake: true}]);

    return fetchPromoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_PROMO_FILM_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should failed API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchPromoFilmLoader = fetchPromoFilm();

    apiMock
      .onGet(ApiRoute.FETCH_PROMO)
      .reply(404, 'error message');

    return fetchPromoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_PROMO_FILM_FAIL,
          payload: 'error message',
        });
      })
      .catch(() => {});
  });
  it('should correct API call to POST /favorite/:film_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const status = '0';
    const addToFavoritesLoader = addToFavorites(id, status);

    apiMock
      .onPost(ApiRoute.ADD_TO_FAVORITES.replace(':film_id', id).replace(':status', status))
      .reply(200, [{fake: true}]);

    return addToFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FILM,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_TO_FAVORITES_SUCCESS,
        });
      });
  });
  it('should failed API call to POST /favorite/:film_id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = '1';
    const status = '0';
    const addToFavoritesLoader = addToFavorites(id, status);

    apiMock
      .onPost(ApiRoute.ADD_TO_FAVORITES.replace(':film_id', id).replace(':status', status))
      .reply(404, 'error message');

    return addToFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_TO_FAVORITES_FAIL,
          payload: 'error message',
        });
      })
      .catch(() => {});
  });
});
