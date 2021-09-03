import './card.scss';
import { BaseComponent } from '../base-component';
import { cardClickHandler } from '../../events/event_main';
import { state } from '../../config/state_game';
import { play } from '../../game_work/game_work';

export class Card extends BaseComponent {
  constructor(cardImg:string, word:string, translation:string) {
    super('div', ['carts-container'], word);
    this.element.innerHTML = `
    
    <div class="card">
 
      <div class="card__front">
      <img class="card-img" src="../public/${cardImg}" alt="">
       <div class="card-footer__front card-footer">
      <p class="card-text">${word}</p>
      <img class="button-rotate" data-id=${word} src="../public/rotate.svg" alt="button rotate">
       </div>
      </div>
     
      <div class="card__back">
      <img class="card-img" src="../public/${cardImg}" alt="">
      <div class="card-footer__back card-footer">
        <p class="card-text">${translation}</p>
        </div> 
      </div>
    </div>
   `;
    this.element.onclick = (event:MouseEvent):void => {
      if (state.startGame) {
        play(event);
      } else { cardClickHandler(event); }
    };
  }
}
