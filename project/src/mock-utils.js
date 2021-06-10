import {GENRES, TITLES} from './consts.js';
import {randomElem, randomInt} from './utils.js';

export function getFilmCardProps () {
  return {
    title: randomElem(TITLES),
    genre: randomElem(GENRES),
    year: randomInt(2021, 2000),
  };
}

export function getCardKeys(amount) {
  return Array(amount).fill('').map(Math.random);
}
