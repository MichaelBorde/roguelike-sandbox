import { Point } from '../tools';
import { Scenery } from './scenery';

export interface Player {
  position: Point;
}

export interface State {
  scenery: Scenery;
  player: Player;
}
