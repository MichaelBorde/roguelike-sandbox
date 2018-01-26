import { drawGrid, registerInputEvents } from './browser/index.js';
import { Point, Vector } from './geometry/index.js';

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

let playerPosition = new Point(3, 3);

registerInputEvents(onInput);

loop();

function loop() {
  requestAnimationFrame(loop);
  draw();
}

function onInput(input) {
  switch (input) {
    case 'up':
      movePlayer(new Vector(0, -1));
      break;
    case 'down':
      movePlayer(new Vector(0, 1));
      break;
    case 'left':
      movePlayer(new Vector(-1, 0));
      break;
    case 'right':
      movePlayer(new Vector(1, 0));
      break;
  }
}

function movePlayer(movement) {
  const nextPosition = playerPosition.add(movement);
  if (movementAllowed(nextPosition)) {
    playerPosition = nextPosition;
  }
}

function movementAllowed(position) {
  return world[position.y][position.x] === '.';
}

function draw() {
  const worldCopy = world.slice().map(r => r.slice());
  worldCopy[playerPosition.y][playerPosition.x] = '@';
  drawGrid(worldCopy);
}
