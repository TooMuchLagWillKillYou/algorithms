import Point from "./Point.js";
import PointsFactory from "./PointsFactory.js";

const points = new PointsFactory(false).points;
const startingPoint = points[0];
const processedIds = [startingPoint.id];
const orderedPoints = [];
nearestNeighbourOf(startingPoint);
console.log(orderedPoints.map((p) => p.id).join(", "));

function nearestNeighbourOf(theStartingPoint) {
  let nearestNeighbour = theStartingPoint;
  let distanceAcc = 9999;

  points.filter(excludeProcessedPoints).forEach(findNeighbourOf);

  processedIds.push(nearestNeighbour.id);
  orderedPoints.push(theStartingPoint);

  if (processedIds.length <= 10) {
    const newStartingPoint = points.find((x) => x.id == nearestNeighbour.id);
    nearestNeighbourOf(newStartingPoint);
  }

  function findNeighbourOf(aPoint) {
    const temp = temporaryPoint(aPoint);
    if (distanceAcc > temp.dist) {
      distanceAcc = temp.dist;
      nearestNeighbour = temp;
    }
  }
  function temporaryPoint(aPoint) {
    const intermediateX = theStartingPoint.x - aPoint.x;
    const intermediateY = theStartingPoint.y - aPoint.y;
    return new Point(aPoint.id, intermediateX, intermediateY);
  }
  function excludeProcessedPoints(aPoint) {
    return (
      aPoint.id != theStartingPoint.id && !processedIds.includes(aPoint.id)
    );
  }
}

export default nearestNeighbourOf;

  // console.log(
  //   `The neighbour of ${theStartingPoint.id} is ${nearestNeighbour.id}`
  // );