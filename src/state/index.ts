import { RawPoint } from '../geometry';

export interface State {
  world: World;
  playerPosition: RawPoint;
}

export type World = string[][];
