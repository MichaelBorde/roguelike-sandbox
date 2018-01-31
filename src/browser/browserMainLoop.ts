import { MainLoop } from '../mainLoop';

export class BrowserMainLoop extends MainLoop {
  private drawAnimationFrame: number;

  public start() {
    const self = this;
    runLoop(window.performance.now());

    function runLoop(timestamp: number) {
      self.drawAnimationFrame = requestAnimationFrame(runLoop);
      self.loop(timestamp);
    }
  }

  public stop() {
    cancelAnimationFrame(this.drawAnimationFrame);
  }
}
