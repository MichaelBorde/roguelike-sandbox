export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    return new Point(this.x + vector.x, this.y + vector.y);
  }
}
