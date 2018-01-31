import './style/index.css';
import { listenToInputs, MainLoopSequencer, renderWorld } from './browser';
import { Point, Vector } from './geometry';
import { State } from './state';
import { ControllerState, Controller } from './inputs';
import { createMainLoop } from './loop';

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

const controller = new Controller();
listenToInputs(controller);

const mainLoop = createMainLoop({
  controller,
  render,
  update,
  initialState
});

const mainLoopSequencer = new MainLoopSequencer(mainLoop);
mainLoopSequencer.start();

function update(description: {
  controllerState: ControllerState;
  state: State;
}) {
  const { controllerState, state } = description;
  if (controllerState.up) {
    return movePlayer(state, new Vector({ x: 0, y: -1 }));
  } else if (controllerState.down) {
    return movePlayer(state, new Vector({ x: 0, y: 1 }));
  } else if (controllerState.left) {
    return movePlayer(state, new Vector({ x: -1, y: 0 }));
  } else if (controllerState.right) {
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
