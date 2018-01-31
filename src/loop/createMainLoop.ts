import { Controller } from '../inputs';
import { State } from '../state';
import { MainLoopRender, MainLoopUpdate } from './types';

export function createMainLoop(construction: {
  controller: Controller;
  update: MainLoopUpdate;
  render: MainLoopRender;
  initialState: State;
}) {
  const { controller, update, render, initialState } = construction;
  let state = initialState;
  return (timestamp: number) => {
    const controllerState = controller.snapshot();
    state = update({ controllerState, state, timestamp });
    render({ state });
  };
}
