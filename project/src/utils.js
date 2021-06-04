export function randomInt(max, min = 0) {
  return Math.round(min + Math.random() * (max - min));
}

export function randomElem(arr) {
  return arr[randomInt(arr.length - 1)];
}
