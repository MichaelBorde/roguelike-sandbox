import { Vector } from './vector';

describe('Vector', () => {
  describe('on construction', () => {
    it('should use raw vector information', () => {
      const vector = new Vector({ x: 1, y: 2 });

      expect(vector.x).toEqual(1);
      expect(vector.y).toEqual(2);
    });
  });
});