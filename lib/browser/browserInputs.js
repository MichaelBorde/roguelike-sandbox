import { Inputs } from '../inputs.js';

const codeMapping = {
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

  registerInputEvents() {
    const self = this;
    document.addEventListener('keydown', event => handlePressed(event, true));
    document.addEventListener('keyup', event => handlePressed(event, false));

    function handlePressed(event, value) {
      const input = codeMapping[event.code];
      if (input) {
        self.onInputChanged({ input, value });
        event.preventDefault();
      }
    }
  }
}
