import Point from "./Point.js";
import PointsFactory from "./PointsFactory.js";
 
const points = PointsFactory.staticPoints();
const startingPoint = points[0];
const processedIds = [startingPoint.id];
const orderedPoints = []
nearestNeighbourOf(startingPoint);
console.log(orderedPoints.map(p => p.id).join(", "));


function nearestNeighbourOf(theStartingPoint) {
  let nearestNeighbour = theStartingPoint;
  let distanceAcc = 9999;

  points.filter(excludeStartingPoint).forEach((p) => {
    findNeighbour()
    
    function findNeighbour() {
      const temp = temporaryPoint();
      if (distanceAcc > temp.dist) {
        distanceAcc = temp.dist;
        nearestNeighbour = temp;
      }
    }
    function temporaryPoint() {
      const intermediateX = theStartingPoint.x - p.x;
      const intermediateY = theStartingPoint.y - p.y;
      return new Point(p.id, intermediateX, intermediateY);
    }
  });

  processedIds.push(nearestNeighbour.id);
  console.log(
    `The neighbour of ${theStartingPoint.id} is ${nearestNeighbour.id}`
  );

  orderedPoints.push(theStartingPoint)
  if (processedIds.length < 10) {
    const newStartingPoint = points.find((x) => x.id == nearestNeighbour.id);
    nearestNeighbourOf(newStartingPoint);
  }

  function excludeStartingPoint(aPoint) {
    return (
      aPoint.id != theStartingPoint.id && !processedIds.includes(aPoint.id)
    );
  }
}
