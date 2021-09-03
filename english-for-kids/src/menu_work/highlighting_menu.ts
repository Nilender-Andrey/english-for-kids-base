import { state } from '../config/state_game';

export function highlightingNameMenu():void {
  const mainPage = document.querySelectorAll <HTMLElement>('li');
  mainPage.forEach((li) => {
    if (li.dataset.add === state.activeCategory) li.classList.add('active');
    else li.classList.remove('active');
  });
}
