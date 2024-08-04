import Point from "./Point.js";
import pointsFactory from "./pointsFactory.js";

const points = pointsFactory();
const startingPoint = points[0];
const processedIds = [startingPoint.id];
nearestNeighbourOf(startingPoint);

function nearestNeighbourOf(theStartingPoint) {
  let nearestNeighbour = theStartingPoint;
  let distanceAcc = 9999;

  points.filter(excludeStartingPoint).forEach((p) => {
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
  console.log(
    `The neighbour of ${theStartingPoint.id} is ${nearestNeighbour.id}`
  );

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
