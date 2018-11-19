import { Controller, State, UpdateState } from './update';

export type MainLoop = (timestamp: number) => void;

export type RenderState = (state: State) => void;

export function createMainLoop(construction: {
  controller: Controller;
  updateState: UpdateState;
  renderState: RenderState;
  initialState: State;
}): MainLoop {
  const { controller, updateState, renderState, initialState } = construction;
  let state = initialState;
  return (timestamp: number) => {
    const controllerState = controller.snapshot();
    state = updateState({ controllerState, state, timestamp });
    renderState(state);
  };
}
