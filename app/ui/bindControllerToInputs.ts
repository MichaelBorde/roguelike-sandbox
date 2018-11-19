import { Controller, Input } from '../core';

interface CodeMapping {
  [key: string]: Input;
}

const codeMapping: CodeMapping = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
};

export function bindControllerToInputs(controller: Controller) {
  document.addEventListener('keydown', event =>
    handlePressed(event, i => controller.press(i))
  );
  document.addEventListener('keyup', event =>
    handlePressed(event, i => controller.release(i))
  );

  function handlePressed(event: KeyboardEvent, update: (input: Input) => void) {
    const input = codeMapping[event.code];
    if (input) {
      update(input);
      event.preventDefault();
    }
  }
}
