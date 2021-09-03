import './category_card.scss';
import { BaseComponent } from '../../../../page/base-component';

export class CategoryCard extends BaseComponent {
  constructor() {
    super('div', ['category-card']);
    this.element.innerHTML = `
    <button class="category__close-btn">✖</button>
      <h3 class="category-name">Clothes</h3>
      <p class="word-count">WORDS: <span class="word-count__number">7</span></p>
    <div class="category-card__btns">
      <button class="category__update-btn">Update</button>
      <button class="category__addWord-btn">Words</button>
    </div>
    `;
  }
}
