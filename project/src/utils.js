import {DisplayCards} from './const.js';

export const extend = (obj1, obj2) => ({...{}, ...obj1, ...obj2});

export const adaptFilmToClient = (film) => (
  {
    id: film['id'].toString(),
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
    id: user['id'].toString(),
    email: user['email'],
    name: user['name'],
    avatarUrl: user['avatar_url'],
    token: user['token'],
  }
);

export const getFilmDurationInHoursAndMinutes = (durationInMinutes) => {
  if (durationInMinutes < 60) {
    return `${durationInMinutes}m`;
  }
  return `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}m`;
};

export const getFilmsMoreLikeThis = (films, filmSample) => (
  films
    .filter((film) => (film.id !== filmSample.id))
    .slice(0, DisplayCards.MORE_LIKE_THIS)
);

export const chunkArray = (arr, chunksAmount = 2) => {
  const chunks = [];
  const chunkSize = Math.round(arr.length / chunksAmount);
  while (arr.length) {
    chunks.push(arr.splice(0, chunkSize));
  }
  return chunks;
};
