export function getRandomInteger(max, min = 0) {
  return Math.round(min + Math.random() * (max - min));
}

export function getRandomArrayElement(arr) {
  return arr[getRandomInteger(arr.length - 1)];
}

export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    setTimeout(fn.bind(null, ...args), delay);
  }
}

export function getFilmByID(films, id) {
  return films.find((film) => film.id === id);
}

export function adaptFilmToClient(film) {
  return {
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
  };
}
