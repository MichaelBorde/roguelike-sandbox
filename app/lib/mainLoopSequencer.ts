import { MainLoop } from '../../lib';

export class MainLoopSequencer {
  private mainLoop: MainLoop;
  private drawAnimationFrame: number;

  constructor(mainLoop: MainLoop) {
    this.mainLoop = mainLoop;
    this.drawAnimationFrame = 0;
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
