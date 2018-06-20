import { Grid, Point } from '../tools';

export type Scenery = Grid<string>;

export interface State {
  scenery: Scenery;
  player: { position: Point };
}
