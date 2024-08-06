import Point from "./Point.js";
import PointsFactory from "./PointsFactory.js";

const points = new PointsFactory(false).points;
const processedIds = [];
nearestNeighbourOf(points[0]);
console.log(processedIds.join(", "));

function nearestNeighbourOf(theStartingPoint) {
  let nearestNeighbour = theStartingPoint;
  let distanceAcc = 9999;

  points.filter(excludeProcessedPoints).forEach(findNeighbourOf);

  if (processedIds.length < 10) {
    processedIds.push(theStartingPoint.id);
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
