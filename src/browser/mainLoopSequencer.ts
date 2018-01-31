import { MainLoop } from '../loop/index';

export class MainLoopSequencer {
  private mainLoop: MainLoop;
  private drawAnimationFrame: number;

  constructor(mainLoop: MainLoop) {
    this.mainLoop = mainLoop;
  }

  public start() {
    const self = this;
    runLoop(window.performance.now());

    function runLoop(timestamp: number) {
      self.drawAnimationFrame = requestAnimationFrame(runLoop);
      self.mainLoop(timestamp);
    }
  }

  public stop() {
    cancelAnimationFrame(this.drawAnimationFrame);
  }
}
