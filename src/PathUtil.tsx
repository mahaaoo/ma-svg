/**
  M = moveto
  L = lineto
  H = horizontal lineto
  V = vertical lineto
  C = curveto
  S = smooth curveto
  Q = quadratic Bézier curve
  T = smooth quadratic Bézier curveto
  A = elliptical Arc
  Z = closepath
 */
  interface Point {
    x: number;
    y: number;
  }

  class dUtil {
    _d = '';
    _currentCoordinate = {
      x: 0,
      y: 0,
    }
  
    createPoint(point: Point) {
      if (this._d.length > 0) {
        // only call this function once
        return;
      }
      // M
      this._d = `M ${point.x} ${point.y}`;
      this._currentCoordinate = point;
    }
    HTo(value: number) {
      // 
      this._d = this._d + `H ${value}`;
      this._currentCoordinate = {
        x: this._currentCoordinate.x + value,
        y: this._currentCoordinate.y
      }
    }
    VTo(value: number) {
      this._d = this._d + `V ${value}`;
      this._currentCoordinate = {
        x: this._currentCoordinate.x,
        y: this._currentCoordinate.y + value
      }
    }
    moveTo(point: Point) {
      this._d = this._d + `L ${point.x} ${point.y}`;
      this._currentCoordinate = {
        x: this._currentCoordinate.x + point.x,
        y: this._currentCoordinate.y + point.y
      }
    }
    getPath() {
      return this._d;
    }
  }