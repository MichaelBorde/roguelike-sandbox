export * from './mainLoop.js';

export function renderGrid(grid) {
  const screen = document.getElementById('screen');
  screen.innerHTML = '';
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = createRow();
    for (let tileIndex = 0; tileIndex < grid[rowIndex].length; tileIndex++) {
      const tile = createTile(grid[rowIndex][tileIndex]);
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

const codeMapping = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
};

export function registerInputEvents(onInputPressChanged) {
  document.addEventListener('keydown', event => handlePressed(event, true));
  document.addEventListener('keyup', event => handlePressed(event, false));

  function handlePressed(event, value) {
    const input = codeMapping[event.code];
    if (input) {
      onInputPressChanged({ id: input, value });
      event.preventDefault();
    }
  }
}
