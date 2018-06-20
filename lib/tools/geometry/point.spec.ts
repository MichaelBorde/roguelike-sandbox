import { addVectorToPoint } from './point';

describe('Point module', () => {
  describe('on add vector to point', () => {
    it('should add coordinates', () => {
      const point = { x: 1, y: 2 };
      const vector = { x: 4, y: 5 };

      const newPoint = addVectorToPoint(vector, point);

      expect(newPoint.x).toEqual(5);
      expect(newPoint.y).toEqual(7);
    });
  });
});
