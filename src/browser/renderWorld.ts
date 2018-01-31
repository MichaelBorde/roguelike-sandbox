import { World } from '../state';

export function renderWorld(world: World) {
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
