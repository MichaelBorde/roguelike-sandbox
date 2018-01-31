import { ControllerState, Input } from './types';

export class Controller {
  private state: ControllerState;

  constructor() {
    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  public press(input: Input) {
    this.inputChanged(input, true);
  }

  public release(input: Input) {
    this.inputChanged(input, false);
  }

  private inputChanged(input: Input, value: boolean) {
    this.state = { ...this.state, [input]: value };
  }

  public snapshot(): ControllerState {
    return { ...this.state };
  }
}
