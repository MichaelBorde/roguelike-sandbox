export interface SceneryCharacteristics {
  passable: boolean;
}

export interface SceneryCharacteristicsMap {
  [key: string]: SceneryCharacteristics;
}

export const sceneryCharacteristicsMap: SceneryCharacteristicsMap = {
  '.': {
    passable: true
  },
  '#': {
    passable: false
  }
};
