import { state } from '../config/state_game';
import { restartGame } from './restart_game';

export function gameEnd():void {
  const wrap = document.querySelector <HTMLElement>('.wrap');
  const wrapResult = document.querySelector <HTMLElement>('.wrap__result');
  const wrapImg = document.querySelector <HTMLImageElement>('.wrap__img');
  if (wrap && wrapResult && wrapImg) {
    if (state.mistakes) {
      wrap.classList.remove('none');
      wrap.classList.add('fail');
      wrapResult.innerHTML = `${state.mistakes} wrong answers`;
      wrapImg.style.display = 'block';
      wrapImg.src = '../public/result/failure.jpg';
    } else {
      wrap.classList.remove('none');
      wrap.classList.add('super');
      wrapResult.innerHTML = `${state.mistakes} wrong answers`;
      wrapImg.style.display = 'block';
      wrapImg.src = '../public/result/success.jpg';
    }
  }
  state.mistakes = 0;
  state.endGame = true;
  restartGame();
}
