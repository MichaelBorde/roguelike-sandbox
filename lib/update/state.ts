import { Grid, RawPoint } from '../tools';

export type Scenery = Grid<string>;

export interface State {
  scenery: Scenery;
  player: { position: RawPoint };
}
