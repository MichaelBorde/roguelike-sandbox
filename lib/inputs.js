export class Inputs {
  constructor() {
    this.state = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  onInputChanged(change) {
    const { input, value } = change;
    this.state[input] = value;
  }

  get() {
    return { ...this.state };
  }
}
