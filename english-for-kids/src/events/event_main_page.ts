import { Category } from '../config/state_cards';
import { state } from '../config/state_game';
import { addRemoveGameControl } from '../menu_work/add_remove_game_control';
import { addCard } from '../page/cards_generator';

export function menuHandler(event: MouseEvent): void {
  if (event.currentTarget instanceof HTMLElement) {
    state.activeCategory = event.currentTarget.id;
    if (state.activeCategory) {
      const item = Category.indexOf(state.activeCategory);

      if (item === -1) throw new Error('Menu category not added');
      addCard(item);
    }
    if (state.menuGameControlState) {
      addRemoveGameControl();
    }
  }
}
