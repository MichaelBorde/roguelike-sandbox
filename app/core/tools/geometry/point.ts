import { Vector } from './vector';

export interface Point {
  x: number;
  y: number;
}

export function addVectorToPoint(vector: Vector, point: Point): Point {
  return {
    x: point.x + vector.x,
    y: point.y + vector.y
  };
}
