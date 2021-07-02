export const getRandomInteger = (max, min = 0) => Math.round(min + Math.random() * (max - min));

export const getRandomArrayElement = (arr) => arr[getRandomInteger(arr.length - 1)];

export const getFilmByID = (films, id) => films.find((film) => film.id === id);

export const extend = (obj1, obj2) => ({...{}, ...obj1, ...obj2});

export const reduceFilmGenres = (acc, film) => acc.includes(film.genre) ? acc : [...acc, film.genre];

export const adaptFilmToClient = (film) => (
  {
    id: film['id'],
    title: film['name'],
    posterImage: film['poster_image'],
    previewImage: film['preview_image'],
    backgroundImage: film['background_image'],
    backgroundColor: film['background_color'],
    videoLink: film['video_link'],
    previewVideoLink: film['preview_video_link'],
    description: film['description'],
    rating: film['rating'],
    scoresCount: film['scores_count'],
    director: film['director'],
    starring: film['starring'],
    runTime: film['run_time'],
    genre: film['genre'],
    year: film['released'],
    isFavorite: film['is_favorite'],
  }
);

export const adaptUserToClient = (user) => (
  {
    id: user['id'],
    email: user['email'],
    name: user['name'],
    avatarUrl: user['avatar_url'],
    token: user['token'],
  }
);

