import Point from "./Point.js";

function pointsFactory(random = false) {
  if (random) {
    return randomPoints().sort(byDistanceFromOrigin);
  }
  return staticPoints().sort(byDistanceFromOrigin);

  function staticPoints() {
    return [
      new Point(1, -1, 4),
      new Point(2, 6, -2),
      new Point(3, -3, 6),
      new Point(4, -4, -8),
      new Point(5, -1, 9),
      new Point(6, 9, 2),
      new Point(7, 9, 4),
      new Point(8, -10, -1),
      new Point(9, 5, -9),
      new Point(10, 7, 9),
    ];
  }
  function randomPoints() {
    let result = [];
    for (let i = 0; i < 10; i++) {
      const id = i + 1;
      const randomX = randomNumber();
      const randomY = randomNumber();
      result.push(new Point(id, randomX, randomY));
    }
    return result;
  }
  function byDistanceFromOrigin(a, b) {
    return a.hypotenuse - b.hypotenuse;
  }
  function randomNumber() {
    let min = -10;
    let max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default pointsFactory;
