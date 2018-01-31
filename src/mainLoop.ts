import { InputState } from './inputs';
import { State } from './state';

type ReadInputs = () => InputState;
type MainLoopUpdate = (
  update: { inputs: InputState; state: State; timestamp: number }
) => State;
type MainLoopRender = (render: { state: State }) => void;

export class MainLoop {
  private readInputs: ReadInputs;
  private update: MainLoopUpdate;
  private render: MainLoopRender;
  private state: State;

  constructor(construction: {
    readInputs: ReadInputs;
    update: MainLoopUpdate;
    render: MainLoopRender;
    initialState: State;
  }) {
    const { readInputs, update, render, initialState } = construction;
    this.readInputs = readInputs;
    this.update = update;
    this.render = render;
    this.state = initialState;
  }

  start() {}

  loop(timestamp: number) {
    const inputs = this.readInputs();
    this.state = this.update({ inputs, state: this.state, timestamp });
    this.render({ state: this.state });
  }

  stop() {}
}
