import './style/index.css';
import { BrowserMainLoop, renderWorld, WebInputs } from './browser';
import { Point, Vector } from './geometry';
import { State } from './state';
import { InputState } from './inputs';

const initialState: State = {
  world: [
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
  ],
  playerPosition: { x: 3, y: 3 }
};

const inputs = new WebInputs();

new BrowserMainLoop({
  readInputs: inputs.get.bind(inputs),
  render,
  update,
  initialState
}).start();

function update(description: { inputs: InputState; state: State }) {
  const { inputs, state } = description;
  if (inputs.up) {
    return movePlayer(state, new Vector({ x: 0, y: -1 }));
  } else if (inputs.down) {
    return movePlayer(state, new Vector({ x: 0, y: 1 }));
  } else if (inputs.left) {
    return movePlayer(state, new Vector({ x: -1, y: 0 }));
  } else if (inputs.right) {
    return movePlayer(state, new Vector({ x: 1, y: 0 }));
  }
  return { ...state };
}

function movePlayer(state: State, movement: Vector) {
  const nextPosition = new Point(state.playerPosition).add(movement);
  if (movementAllowed(state, nextPosition)) {
    return { ...state, playerPosition: { ...nextPosition } };
  }
  return state;
}

function movementAllowed(state: State, position: Point) {
  return state.world[position.y][position.x] === '.';
}

function render(description: { state: State }) {
  const { state } = description;
  const { world, playerPosition } = state;
  const worldCopy = world.slice().map(r => r.slice());
  worldCopy[playerPosition.y][playerPosition.x] = '@';
  renderWorld(worldCopy);
}
