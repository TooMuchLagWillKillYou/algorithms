import Point from "./Point.js";
import pointsFactory from "./pointsFactory.js";

const startingPoint = pointsFactory()[0];
let processedIds = [startingPoint.id];
const nearestNeighbour = nearestNeighbourOf(startingPoint);
console.log(`The neighbour of ${startingPoint.id} is ${nearestNeighbour.id}`);
console.log(`Processed ids are ${processedIds.join(", ")}`);

function nearestNeighbourOf(theStartingPoint) {
  let nearestNeighbour = theStartingPoint;
  let distanceAcc = 9999;

  pointsFactory()
    .filter(excludeStartingPoint)
    .forEach((p) => {
      if (distanceAcc > temporaryPoint().dist) {
        distanceAcc = temporaryPoint().dist;
        nearestNeighbour = temporaryPoint();
      }

      function temporaryPoint() {
        const intermediateX = theStartingPoint.x - p.x;
        const intermediateY = theStartingPoint.y - p.y;
        return new Point(p.id, intermediateX, intermediateY);
      }
    });

  processedIds.push(nearestNeighbour.id);
  return nearestNeighbour;

  function excludeStartingPoint(aPoint) {
    return (
      aPoint.id != theStartingPoint.id && !processedIds.includes(aPoint.id)
    );
  }
}
