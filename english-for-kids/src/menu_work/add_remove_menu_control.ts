import { state } from '../config/state_game';

export function addRemoveMenuControl():void {
  const modes = document.querySelectorAll <HTMLElement>('.mode');
  if (state.menuGameControlState) {
    modes.forEach((mode) => {
      mode.classList.remove('none');
    });
  } else {
    modes.forEach((mode) => {
      mode.classList.add('none');
    });
  }
}
