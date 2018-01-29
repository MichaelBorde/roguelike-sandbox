import { renderGrid, MainLoop, registerInputEvents } from './browser/index.js';
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

let inputState = {
  up: false,
  down: false,
  left: false,
  right: false
};

registerInputEvents(onInputPressChanged);

new MainLoop(render, update).start();

function onInputPressChanged(event) {
  const { id, value } = event;
  inputState[id] = value;
}

function update() {
  if (inputState.up) {
    movePlayer(new Vector(0, -1));
  } else if (inputState.down) {
    movePlayer(new Vector(0, 1));
  } else if (inputState.left) {
    movePlayer(new Vector(-1, 0));
  } else if (inputState.right) {
    movePlayer(new Vector(1, 0));
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

function render() {
  const worldCopy = world.slice().map(r => r.slice());
  worldCopy[playerPosition.y][playerPosition.x] = '@';
  renderGrid(worldCopy);
}
