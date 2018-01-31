export interface InputState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export type InputType = 'up' | 'down' | 'left' | 'right';

interface InputChange {
  input: InputType;
  value: boolean;
}

export class Inputs {
  private state: InputState;

  constructor() {
    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  onInputChanged(change: InputChange) {
    const { input, value } = change;
    this.state[input] = value;
  }

  get() {
    return { ...this.state };
  }
}
