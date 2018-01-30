export function renderWorld(world) {
  const screen = document.getElementById('screen');
  screen.innerHTML = '';
  for (let rowIndex = 0; rowIndex < world.length; rowIndex++) {
    const row = createRow();
    for (let tileIndex = 0; tileIndex < world[rowIndex].length; tileIndex++) {
      const tile = createTile(world[rowIndex][tileIndex]);
      row.appendChild(tile);
    }
    screen.appendChild(row);
  }
}

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function createTile(content) {
  const tile = document.createElement('span');
  tile.classList.add('tile');
  tile.innerHTML = content;
  return tile;
}
