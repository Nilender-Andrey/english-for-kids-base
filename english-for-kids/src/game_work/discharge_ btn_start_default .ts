import { state } from '../config/state_game';

export function startBtnDefault():void {
  const btnStart = document.querySelector <HTMLElement>('.game-btn');
  if (btnStart) {
    if (btnStart.dataset.set === 'repeat') {
      btnStart.innerText = 'Start';
      btnStart.dataset.set = 'start';
      btnStart.classList.remove('repeat');
      state.startGame = false;
    }
  }
}
