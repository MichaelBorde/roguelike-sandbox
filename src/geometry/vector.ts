export interface RawVector {
  x: number;
  y: number;
}

export class Vector {
  public x: number;
  public y: number;

  constructor(raw: RawVector) {
    this.x = raw.x;
    this.y = raw.y;
  }
}
