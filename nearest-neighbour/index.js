import Point from "./Point.js";
import pointsFactory from "./pointsFactory.js";

const points = pointsFactory();
const processedPoints = [];

points.forEach((p) => {
  console.log("processedPoints", processedPoints);

  findNearestNeighbour(p);
});

function findNearestNeighbour(startingPoint) {
  processedPoints.push(startingPoint);
  let nearestNeighbour = null;
  points.filter(excludeStartingPoint).forEach((p) => {
    const intermediateX = startingPoint.x - p.x;
    const intermediateY = startingPoint.y - p.y;
    const intermediatePoint = new Point(p.id, intermediateX, intermediateY);

    if (
      !nearestNeighbour ||
      (intermediatePoint.dist < nearestNeighbour.dist &&
        !processedPoints.includes((x) => p.id == x.id))
    ) {
      nearestNeighbour = intermediatePoint;
      processedPoints.push(p);
    }
  });

  console.log(
    `The nearest neighbour of ${startingPoint.id} is ${nearestNeighbour.id}`
  );

  function excludeStartingPoint(aPoint) {
    return aPoint.id != startingPoint.id;
  }
}

// function findNearestNeighbour(startingPoint) {
//   // let result = points
//   //   .filter(excludeStartingPoint)
//   //   .map(calculateDistanceFrom)
//   //   .sort(byDistance);

//   processedPoints.push(startingPoint);
//   let nearestNeighbour = null;
//   points.filter(excludeStartingPoint).forEach((p) => {
//     const intermediateX = startingPoint.x - p.x;
//     const intermediateY = startingPoint.y - p.y;
//     const intermediatePoint = new Point(p.id, intermediateX, intermediateY);

//     if (
//       !nearestNeighbour ||
//       (intermediatePoint.dist < nearestNeighbour.dist &&
//         !processedPoints.includes((x) => p.id == x.id))
//     ) {
//       nearestNeighbour = intermediatePoint;
//       processedPoints.push(p);
//     }
//   });

//   console.log(
//     `The nearest neighbour of ${startingPoint.id} is ${nearestNeighbour.id}`
//   );

//   function excludeStartingPoint(aPoint) {
//     return aPoint.id != startingPoint.id;
//   }
//   // function calculateDistanceFrom(aPoint) {
//   //   const intermediateX = startingPoint.x - aPoint.x;
//   //   const intermediateY = startingPoint.y - aPoint.y;
//   //   return new Point(aPoint.id, intermediateX, intermediateY);
//   // }
//   // function byDistance(a, b) {
//   //   return a.dist - b.dist;
//   // }
// }
// function nearest2(startingPoint, pointsArray) {
//   // exclude the starting point from the points array
//   let currentPoint = startingPoint;
//   let remainingPoints = pointsArray.filter(excludeStartingPoint);

//   // find the nearest point to the starting point
//   let nearestNeighbour = null;

//   remainingPoints.forEach((p) => {
//     const intermediateX = startingPoint.x - p.x;
//     const intermediateY = startingPoint.y - p.y;
//     const intermediatePoint = new Point(p.id, intermediateX, intermediateY);

//     if (!nearestNeighbour || intermediatePoint.dist < nearestNeighbour.dist) {
//       nearestNeighbour = intermediatePoint;
//     }
//   });

//   console.log(nearestNeighbour);
//   currentPoint = nearestNeighbour;
//   remainingPoints = remainingPoints.filter(excludeStartingPoint);
//   nearest2(nearestNeighbour, remainingPoints);

//   // exclude the nearest point that you just found from the points array

//   function excludeStartingPoint(aPoint) {
//     return aPoint.id != currentPoint.id;
//   }
// }
// function nearest3(startingPoint) {
//   let currentPoint = startingPoint;
//   let remainingPoints = points.filter(excludeStartingPoint);

//   points.forEach((p) => {
//     currentPoint = p;
//     remainingPoints = remainingPoints.filter(excludeStartingPoint);
//   });

//   function excludeStartingPoint(aPoint) {
//     return aPoint.id != currentPoint.id;
//   }
// }
