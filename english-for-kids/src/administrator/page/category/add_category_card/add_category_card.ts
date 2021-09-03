import './add_category_card.scss';
import { BaseComponent } from '../../../../page/base-component';

export class AddCategoryCard extends BaseComponent {
  constructor() {
    super('div', ['add-category-card']);
    this.element.innerHTML = `
      <label class="add-category__label" for="add-category__input">Category Name:
         <input class="add-category__input" id="add-category__input" type="text" value="">
      </label>
       <div class="add-category-card__btns">
        <button class="add__cancel-btn">Cancel</button>
        <button class="add__create-btn">Create</button>
       </div>
    `;

    this.element.onclick = (event:MouseEvent):void => {

    };
  }
}
