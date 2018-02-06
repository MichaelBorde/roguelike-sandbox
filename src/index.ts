import { bindControllerToInputs, MainLoopSequencer, render } from './browser';
import { Point, Vector } from './geometry';
import { Controller, ControllerState } from './inputs';
import { createMainLoop } from './loop';
import { State } from './state';
import './style/index.css';

const initialState: State = {
  scenery: [
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
  player: { position: { x: 3, y: 3 } }
};

const controller = new Controller();
bindControllerToInputs(controller);

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
  const nextPosition = new Point(state.player.position).add(movement);
  if (movementAllowed(state, nextPosition)) {
    return {
      ...state,
      player: {
        ...state.player,
        position: nextPosition
      }
    };
  }
  return state;
}

function movementAllowed(state: State, position: Point) {
  return state.scenery[position.y][position.x] === '.';
}
