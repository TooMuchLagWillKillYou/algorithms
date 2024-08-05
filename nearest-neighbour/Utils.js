function byDistanceFromOrigin(a, b) {
  return a.hypotenuse - b.hypotenuse;
}
function randomNumber() {
  let min = -10;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { byDistanceFromOrigin, randomNumber };
