export class Point {
  constructor(raw) {
    this.x = raw.x;
    this.y = raw.y;
  }

  add(vector) {
    return new Point({ x: this.x + vector.x, y: this.y + vector.y });
  }
}
