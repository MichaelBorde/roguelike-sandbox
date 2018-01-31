import { Inputs, InputType } from '../inputs';

interface CodeMapping {
  [key: string]: InputType;
}

const codeMapping: CodeMapping = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
};

export class WebInputs extends Inputs {
  constructor() {
    super();
    this.registerInputEvents();
  }

  private registerInputEvents() {
    const self = this;
    document.addEventListener('keydown', event => handlePressed(event, true));
    document.addEventListener('keyup', event => handlePressed(event, false));

    function handlePressed(event: KeyboardEvent, value: boolean) {
      const input = codeMapping[event.code];
      if (input) {
        self.onInputChanged({ input, value });
        event.preventDefault();
      }
    }
  }
}
