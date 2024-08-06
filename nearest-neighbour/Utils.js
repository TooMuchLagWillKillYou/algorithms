import Point from "./Point.js";

function byDistanceFromOrigin(a, b) {
  return a.hypotenuse - b.hypotenuse;
}
function randomNumber() {
  let min = -10;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function orderPointsByDistance(points, startingPointId = 1) {

  const result = [];
  nearestNeighbourOf(points.find(p => p.id == startingPointId));
  
  function nearestNeighbourOf(thisPoint) {
    let nearestNeighbour = thisPoint;
    let distanceAccumulator = 9999;
    points.filter(excludeProcessedPoints).forEach(findNeighbourOf);
    if (result.length < 10) {
      result.push(thisPoint.id);
      const newStartingPoint = points.find((x) => x.id == nearestNeighbour.id);
      nearestNeighbourOf(newStartingPoint);
    }
    
    //#region functions
    function findNeighbourOf(aPoint) {
      const temp = new Point(aPoint.id, thisPoint.x - aPoint.x, thisPoint.y - aPoint.y)
      if (distanceAccumulator > temp.dist) {
        distanceAccumulator = temp.dist;
        nearestNeighbour = temp;
      }
    }
    function excludeProcessedPoints(aPoint) {
      return (
        aPoint.id != thisPoint.id && !result.includes(aPoint.id)
      );
    }
    //#endregion
  }
  return result
}

export { byDistanceFromOrigin, randomNumber, orderPointsByDistance };
