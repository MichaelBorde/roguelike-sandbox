import './index.css';
import { start } from './lib';

const screen = document.getElementById('screen');

if (screen) {
  start(screen);
}
