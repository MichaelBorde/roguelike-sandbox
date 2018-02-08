import { Point } from './point';
import { Vector } from './vector';

describe('Point', () => {
  describe('on construction', () => {
    it('should use raw point information', () => {
      const point = new Point({ x: 1, y: 2 });

      expect(point.x).toEqual(1);
      expect(point.y).toEqual(2);
    });
  });

  describe('on add', () => {
    it('should add vector coordinates', () => {
      const point = new Point({ x: 1, y: 2 });
      const vector = new Vector({ x: 4, y: 5 });

      const newPoint = point.add(vector);

      expect(newPoint.x).toEqual(5);
      expect(newPoint.y).toEqual(7);
    });

    it('should create a new point', () => {
      const point = new Point({ x: 1, y: 2 });
      const vector = new Vector({ x: 0, y: 0 });

      const newPoint = point.add(vector);

      expect(newPoint).not.toBe(point);
    });
  });
});