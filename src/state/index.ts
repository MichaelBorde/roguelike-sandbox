import { RawPoint } from '../geometry';
import { Grid } from '../types';

export interface State {
  scenery: Scenery;
  player: { position: RawPoint };
}

export type Scenery = Grid<string>;
