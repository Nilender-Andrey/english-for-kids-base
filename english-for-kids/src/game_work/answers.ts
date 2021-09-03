import { state } from '../config/state_game';
import { playSound } from '../utils/play_sound';
import { gameEnd } from './game_end';

export function handleCorrectAnswer():void {
  const result = document.querySelector <HTMLElement>('.result');
  if (state.mixedSounds[state.step + 1]) {
    state.step++;
    state.playing = true;
    playSound(state.mixedSounds[state.step]);

    if (result) {
      result.innerHTML = `⭐${result.innerHTML}`;
    }
  } else {
    gameEnd();
  }
}

export function handleWrongAnswer():void {
  const result = document.querySelector <HTMLElement>('.result');

  if (result) {
    result.innerHTML = `❌${result.innerHTML}`;
  }
}
