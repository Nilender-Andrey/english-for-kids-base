import Cards from '../config/state_cards';
import { state } from '../config/state_game';
import { changeCardsForTheGame } from '../menu_work/add_remove_game_control';
import { Card } from './card/card';

export function addCard(item:number, dataset = 'game_page'): void {
  const mainWrap = document.querySelector <HTMLElement>('.main-wrap');
  state.categoryNumber = item;
  if (mainWrap) {
    mainWrap.innerHTML = '';
    mainWrap.dataset.set = dataset;

    if (dataset === 'repeat_page' && !Cards[item]) {
      mainWrap.innerHTML = '<p style="font-size: 35px;">No words to repeat!</p>';
    } else {
      Cards[item].forEach((card) => {
        if ('word' in card && 'translation' in card) {
          mainWrap.appendChild(new Card(card.image, card.word, card.translation).element);
        }
      });
    }
    changeCardsForTheGame();
  }
}
