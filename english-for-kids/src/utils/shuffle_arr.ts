import Cards from '../config/state_cards';
import { state } from '../config/state_game';

export function shuffleArr(num:number):string[] {
  state.mixedSounds = Cards[num].map((card):string => {
    if (!('word' in card)) return '';
    return card.word;
  });
  for (let i = state.mixedSounds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [state.mixedSounds[i], state.mixedSounds[j]] = [state.mixedSounds[j], state.mixedSounds[i]];
  }
  return state.mixedSounds;
}
