import './header.scss';
import { BaseComponent } from '../base-component';
import {
  changeTrainingGames,
  headerClickEvents,
} from '../../events/events_header';
import { generateElement } from '../add_component';
import { Category } from '../../config/state_cards';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);

    this.element.innerHTML = `
    <div class="wrap none">
      <img class="wrap__img" src="" alt="smiley">
      <p class="wrap__result"></p>
    </div>

   <div class="header-wrap">
      <div class="menu-wrap">
        <div class="burger" data-name="burger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <p class="menu-text">Menu</p>
        <nav class="nav clean">
          <ul class="menu"></ul>
        </nav>
      </div>


    <label class="switch">
      <input class="switch__input" type="checkbox">
      <span class="slider train"></span>
      <span class="text-train">Train</span>
      <span class="text-play">Play</span>
    </label>

  
   </div>
   <p class="result"></p>
   `;

    this.element.onclick = (event: MouseEvent): void => {
      headerClickEvents(event);
    };

    this.element.onchange = (event: Event): void => {
      changeTrainingGames(event);
    };
    const menu = this.element.querySelector<HTMLElement>('.menu');
    if (menu) {
      Category.forEach((e) => generateElement('li', e, menu, '', e));
    }
  }
}
