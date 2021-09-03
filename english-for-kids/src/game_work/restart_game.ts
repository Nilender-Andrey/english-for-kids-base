import { state } from '../config/state_game';
import { startBtnDefault } from './discharge_ btn_start_default ';

export function restartGame():void {
  startBtnDefault();
  state.step = 0;
  const result = document.querySelector <HTMLElement>('.result');
  if (result) {
    result.innerHTML = '';
  }
}
