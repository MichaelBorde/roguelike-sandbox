import { MainLoop } from '../mainLoop.js';

export class BrowserMainLoop extends MainLoop {
  start() {
    const self = this;
    runLoop(window.performance.now());

    function runLoop(timestamp) {
      self.drawAnimationFrame = requestAnimationFrame(runLoop);
      self.loop(timestamp);
    }
  }

  stop() {
    clearInterval(this.updateInterval);
    cancelAnimationFrame(this.drawAnimationFrame);
  }
}
