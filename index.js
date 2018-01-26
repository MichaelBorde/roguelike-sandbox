const world = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

let playerPosition = { x: 3, y: 3 };

registerInputEvents(onInput);

loop();

function loop() {
  draw();
  requestAnimationFrame(loop);
}

function onInput(input) {
  switch (input) {
    case 'up':
      movePlayer({ x: 0, y: -1 });
      break;
    case 'down':
      movePlayer({ x: 0, y: 1 });
      break;
    case 'left':
      movePlayer({ x: -1, y: 0 });
      break;
    case 'right':
      movePlayer({ x: 1, y: 0 });
      break;
  }
}

function movePlayer(movement) {
  const nextPosition = {
    x: playerPosition.x + movement.x,
    y: playerPosition.y + movement.y
  };
  if (movementAllowed(nextPosition)) {
    playerPosition = nextPosition;
  }
}

function movementAllowed(position) {
  return world[position.y][position.x] === '.';
}

const codeMapping = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
};

function registerInputEvents() {
  document.addEventListener('keydown', event => {
    if (event.type === 'keydown') {
      const input = codeMapping[event.code];
      if (input) {
        onInput(input);
      }
    }
  });
}

function draw() {
  clearScreen();
  const worldCopy = world.slice().map(r => r.slice());
  worldCopy[playerPosition.y][playerPosition.x] = '@';
  drawGrid(worldCopy);
}

function clearScreen() {
  const screen = document.getElementById('screen');
  screen.innerHTML = '';
}

function drawGrid(grid) {
  const screen = document.getElementById('screen');
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
