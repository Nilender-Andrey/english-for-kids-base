import './menu_item.scss';
import { BaseComponent } from '../base-component';
import { menuHandler } from '../../events/event_main_page';

export class MenuItem extends BaseComponent {
  constructor(cardImg:string, heading:string) {
    super('div', ['main_item'], heading);
    this.element.innerHTML = `
    <p class="mode none">Play <span>▶<span></p>
    <img class="card-img" src="../public/${cardImg}" alt="">
    <p class="heading">${heading}</p>
   `;
    this.element.onclick = (event:MouseEvent):void => {
      menuHandler(event);
    };
  }
}
