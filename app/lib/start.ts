import { Controller, createMainLoop, State, updateState } from '../../lib';
import { bindControllerToInputs } from './bindControllerToInputs';
import { MainLoopSequencer } from './mainLoopSequencer';
import { renderState } from './renderState';

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

export function start() {
  const controller = new Controller();
  bindControllerToInputs(controller);

  const mainLoop = createMainLoop({
    controller,
    renderState,
    updateState,
    initialState
  });

  const mainLoopSequencer = new MainLoopSequencer(mainLoop);
  mainLoopSequencer.start();
}

