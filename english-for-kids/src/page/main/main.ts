import './main.scss';
import { BaseComponent } from '../base-component';
import { startButtonHandler } from '../../events/event_main';

export class Main extends BaseComponent {
  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
       <div class="main-wrap">
     </div>
     <button class="game-btn none" data-set="start">Start  ▶</button>
    `;

    const button = this.element.querySelector <HTMLElement>('.game-btn');
    if (button) {
      button.onclick = (event:MouseEvent):void => {
        startButtonHandler(event);
      };
    }
  }
}
