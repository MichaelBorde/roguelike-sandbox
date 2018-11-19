import { Grid, Player, Scenery, State } from '../core';
import { graphics } from './graphics';

type World = Grid<string>;

export function renderState(screen: HTMLElement) {
  return (state: State) => {
    const { scenery, player } = state;
    let world = createWorldFromScenery(scenery);
    world = worldWithPlayer(world, player);
    renderWorld(screen, world);
  };
}

function createWorldFromScenery(scenery: Scenery): World {
  return scenery.map(rows => rows.map(element => graphics.get(element)));
}

function worldWithPlayer(world: World, player: Player): World {
  world[player.position.y][player.position.x] = '@';
  return world;
}

function renderWorld(screen: HTMLElement, world: World) {
  screen.innerHTML = '';
  for (const row of world) {
    const domRow = createRow();
    for (const col of row) {
      const tile = createTile(col);
      domRow.appendChild(tile);
    }
    screen.appendChild(domRow);
  }
}

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function createTile(content: string) {
  const tile = document.createElement('span');
  tile.classList.add('tile');
  tile.innerHTML = content;
  return tile;
}
