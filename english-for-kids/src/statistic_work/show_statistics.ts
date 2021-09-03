import Cards, { Category } from '../config/state_cards';
import { addComponent } from '../page/add_component';
import { receivingData } from './receiving_data';

export function showStatistics():void {
  const tbody = document.querySelector <HTMLElement>('.tbody');
  if (tbody) {
    tbody.innerHTML = '';

    for (let i = 0; i < Category.length - 2; i++) {
      Cards[i].forEach((card) => {
        if ('word' in card && 'translation' in card) {
          const element = document.createElement('tr');
          element.id = card.word;
          element.innerHTML = `
                            <th>${Category[i]}</th>
                            <th>${card.word}</th>
                            <th>${card.translation}</th>
                            <th>${receivingData(card.word, 'Training')}</th>
                            <th>${receivingData(card.word, 'Correct')}</th>
                            <th>${receivingData(card.word, 'Incorrect')}</th>
                            <th>${receivingData(card.word, '%')}</th>
                            `;
          addComponent(tbody, element);
        }
      });
    }
  }
}
