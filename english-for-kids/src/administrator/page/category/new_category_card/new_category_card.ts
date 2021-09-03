import './new_category_card.scss';
import { BaseComponent } from '../../../../page/base-component';

export class NewCategoryCard extends BaseComponent {
  constructor() {
    super('div', ['new-category-card']);
    this.element.innerHTML = `
    <h3 class="category-create">Create new Category</h3>
    <button class="category-create__btn">
      <img class="category-create__btn_img" src="../public/create.png" alt="create">
    </button>
    `;
  }
}
