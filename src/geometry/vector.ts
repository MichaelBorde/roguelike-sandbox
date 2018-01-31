import { RawVector } from './types';

export class Vector {
  public x: number;
  public y: number;

  constructor(raw: RawVector) {
    this.x = raw.x;
    this.y = raw.y;
  }
}
