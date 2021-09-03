import { state } from '../config/state_game';
import { changeDataLocalStorage } from '../statistic_work/local_storage';
import { playSound } from '../utils/play_sound';
import { handleCorrectAnswer, handleWrongAnswer } from './answers';
import { answeredCard } from './game_card_styles';

export function play(event: MouseEvent): void {
  if (event.currentTarget instanceof HTMLElement) {
    if (state.mixedSounds[state.step] === event.currentTarget.id) {
      changeDataLocalStorage(state.mixedSounds[state.step], 0, 1, 0);
      playSound('correct');
      answeredCard(event.currentTarget);
      setTimeout(() => {
        handleCorrectAnswer();
      }, 500);
    } else {
      changeDataLocalStorage(state.mixedSounds[state.step], 0, 0, 1);
      handleWrongAnswer();
      playSound('error');
      state.mistakes++;
    }
  }
}
