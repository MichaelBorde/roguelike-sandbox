import { Grid } from '../tools';

export interface SceneryElement {
  passable: boolean;
}

export const sceneryElements = {
  wall: { passable: false },
  floor: { passable: true }
};

export type Scenery = Grid<SceneryElement>;
