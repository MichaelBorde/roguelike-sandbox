import { State } from '../state';
import { Grid } from '../types';

type World = Grid<string>;

export function render(rendering: { state: State }) {
  const { state } = rendering;
  const { scenery, player } = state;
  const world = scenery.slice().map(r => r.slice());
  world[player.position.y][player.position.x] = '@';
  renderWorld(world);
}

function renderWorld(world: World) {
  const screen = document.getElementById('screen');
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
