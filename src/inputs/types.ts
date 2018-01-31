export type Input = 'up' | 'down' | 'left' | 'right';

export interface ControllerState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}
