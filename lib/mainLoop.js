export class MainLoop {
  constructor(construction) {
    const { readInputs, update, render, initialState = {} } = construction;
    this.readInputs = readInputs;
    this.update = update;
    this.render = render;
    this.state = initialState;
  }

  start() {}

  loop(timestamp) {
    const inputs = this.readInputs();
    this.state = this.update({ inputs, state: this.state, timestamp });
    this.render({ state: this.state });
  }

  stop() {}
}
