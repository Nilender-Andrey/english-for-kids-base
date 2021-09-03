import Cards from '../config/state_cards';
import { state } from '../config/state_game';
import { addRemoveGameControl } from '../menu_work/add_remove_game_control';
import { removeAddSlider } from '../menu_work/remove_add_slider';

import { addCard } from '../page/cards_generator';

type RepeatСards = {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}[];

export function repeatWords():void {
  const table = document.querySelector('table');
  let sortedRows: string[] = [];
  if (Cards.length > state.numberOfCategories) {
    Cards.pop();
  }

  if (table) {
    sortedRows = Array.from(table.rows)
      .slice(1)
      .filter((row) => +row.cells[6].innerText > state.lowerLimitForRepetition
      && +row.cells[6].innerText <= state.upperRepetitionLimit)
      .map((row) => row.cells[1].innerText);
  }
  const repeatСards:RepeatСards = [];
  Cards.flat()
    .forEach((card) => {
      if ('word' in card && sortedRows.includes(card.word)) {
        repeatСards.push(card);
      }
    });
  if (repeatСards.length) {
    Cards.push(repeatСards.slice(0, 8));
    addCard(Cards.length - 1, state.repeatPage);

    removeAddSlider(true);
    addRemoveGameControl();
  } else {
    addCard(Cards.length, state.repeatPage);
  }
}
