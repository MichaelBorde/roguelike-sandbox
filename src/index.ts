import {
  bindControllerToInputs,
  MainLoopSequencer,
  renderState
} from './browser';
import { createMainLoop } from './loop';
import './style/index.css';
import { Controller } from './update';
import { State, updateState } from './update';

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
  renderState,
  updateState,
  initialState
});

const mainLoopSequencer = new MainLoopSequencer(mainLoop);
mainLoopSequencer.start();
