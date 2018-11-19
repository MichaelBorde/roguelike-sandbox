import {
  Controller,
  createMainLoop,
  sceneryElements,
  State,
  updateState
} from '../core';
import { bindControllerToInputs } from './bindControllerToInputs';
import { MainLoopSequencer } from './mainLoopSequencer';
import { renderState } from './renderState';

const { floor, wall } = sceneryElements;

const initialState: State = {
  scenery: [
    [wall, wall, wall, wall, wall, wall],
    [wall, floor, floor, floor, floor, wall],
    [wall, floor, floor, floor, floor, wall],
    [wall, floor, floor, floor, floor, wall],
    [wall, floor, floor, floor, floor, wall],
    [wall, wall, wall, wall, wall, wall]
  ],
  player: { position: { x: 3, y: 3 } }
};

export function start(screen: HTMLElement) {
  const controller = new Controller();
  bindControllerToInputs(controller);

  const mainLoop = createMainLoop({
    controller,
    renderState: renderState(screen),
    updateState,
    initialState
  });

  const mainLoopSequencer = new MainLoopSequencer(mainLoop);
  mainLoopSequencer.start();
}
