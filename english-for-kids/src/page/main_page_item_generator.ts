import { CardsCategory } from '../config/state_cards';
import { state } from '../config/state_game';
import { MenuItem } from './menu_item/menu_item';

export function addMainPageItem():void {
  const mainWrap = document.querySelector <HTMLElement>('.main-wrap');

  if (mainWrap) {
    mainWrap.innerHTML = '';
    mainWrap.dataset.set = state.menuPage;
    CardsCategory.forEach((card) => {
      mainWrap.appendChild(new MenuItem(card.image, card.heading).element);
    });
  }
}
