import { state } from '../config/state_game';
import { repeatWords } from '../game_work/repeat_words';
import { resetLocalStorage } from '../statistic_work/reset';
import { getTheColumnToSort, sorting } from '../statistic_work/sorting';

function handlerChangeCell(event:MouseEvent):void {
  const tableTitles = document.querySelectorAll <HTMLElement>('.table-title');
  if (event.target instanceof HTMLElement) {
    if (event.target.className === 'table-title increase') {
      event.target.classList.add('waning');
      event.target.classList.remove('increase');
      sorting(getTheColumnToSort(event));
    } else

    if (event.target.className === 'table-title waning') {
      event.target.classList.remove('waning');
      event.target.classList.add('increase');
      sorting(getTheColumnToSort(event), state.sortAscending);
    } else

    if (event.target.className === 'table-title') {
      tableTitles.forEach((tableTitle) => {
        tableTitle.classList.remove('waning');
        tableTitle.classList.remove('increase');
      });
      event.target.classList.add('increase');
      sorting(getTheColumnToSort(event), state.sortAscending);
    }
  }
}

export function HandlerStatisticsPade(event:MouseEvent):void {
  if (event.target instanceof HTMLElement) {
    if (event.target.closest('button.reset')) {
      resetLocalStorage();
    }
    if (event.target.closest('button.repeat-words')) {
      repeatWords();
    }
    if (event.target.closest('th.table-title')) {
      handlerChangeCell(event);
    }
  }
}
