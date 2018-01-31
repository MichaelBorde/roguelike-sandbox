import { ControllerState } from '../inputs/types';
import { State } from '../state/index';

export type MainLoopUpdate = (
  update: { controllerState: ControllerState; state: State; timestamp: number }
) => State;

export type MainLoopRender = (render: { state: State }) => void;

export type MainLoop = (timestamp: number) => void;
