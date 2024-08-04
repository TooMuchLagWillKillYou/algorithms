class Point {
  constructor(id, x, y) {
    this._id = id;
    this._x = x;
    this._y = y;
    this._dist = Math.hypot(Math.abs(this.x), Math.abs(this.y));
  }

  get id() {
    return this._id;
  }
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
  }
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
  }
  get dist() {
    return this._dist;
  }
  get distanceFromOrigin() {
    return Math.hypot(Math.abs(this.x), Math.abs(this.y));
  }
}

export default Point;
