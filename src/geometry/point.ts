import { RawPoint } from './types';
import { Vector } from './vector';

export class Point {
  public x: number;
  public y: number;

  constructor(raw: RawPoint) {
    this.x = raw.x;
    this.y = raw.y;
  }

  public add(vector: Vector) {
    return new Point({ x: this.x + vector.x, y: this.y + vector.y });
  }
}
