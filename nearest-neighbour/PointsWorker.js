import Point from './Point.js';

class PointsWorker {
  get result() {
    return this._processedPointsIds;
  }
  static generate(points) {
    this._points = points;
    this._processedPointsIds = [];
    this.nearestNeighbourOf();
    return this._processedPointsIds;
  }
  static nearestNeighbourOf(thisPoint = this._points[0]) {
    // #region nested functions
    const excludeProcessedPoints = (aPoint) => {
      return (
        aPoint.id != thisPoint.id &&
        !this._processedPointsIds.includes(aPoint.id)
      );
    };
    const findNeighbourOf = (aPoint) => {
      const temp = new Point(
        aPoint.id,
        thisPoint.x - aPoint.x,
        thisPoint.y - aPoint.y
      );
      if (distanceAccumulator > temp.dist) {
        distanceAccumulator = temp.dist;
        nearestNeighbour = temp;
      }
    };
    //#endregion

    let nearestNeighbour = thisPoint;
    let distanceAccumulator = 9999;
    this._points.filter(excludeProcessedPoints).forEach(findNeighbourOf);
    if (this._processedPointsIds.length < 10) {
      this._processedPointsIds.push(thisPoint.id);
      const newStartingPoint = this._points.find(
        (x) => x.id == nearestNeighbour.id
      );
      this.nearestNeighbourOf(newStartingPoint);
    }
  }
}

export default PointsWorker;
