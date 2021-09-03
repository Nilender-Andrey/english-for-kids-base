import { state } from '../config/state_game';

export function changeCardsForTheGame():void {
  const cardFooter = document.querySelectorAll <HTMLElement>('.card-footer');
  if (state.menuGameControlState) {
    cardFooter.forEach((card) => {
      card.classList.add('none');
    });
  } else {
    cardFooter.forEach((card) => {
      card.classList.remove('none');
    });
  }
}

export function addRemoveGameControl():void {
  const StartBtn = document.querySelector <HTMLElement>('.game-btn');
  const footer = document.querySelector <HTMLElement>('.footer');
  if (StartBtn && footer) {
    if (state.menuGameControlState) {
      StartBtn.classList.remove('none');
      footer.classList.add('none');
    } else {
      StartBtn.classList.add('none');
      footer.classList.remove('none');
    }
  }
}

export function removeGameControl():void {
  const StartBtn = document.querySelector <HTMLElement>('.game-btn');
  const footer = document.querySelector <HTMLElement>('.footer');
  if (StartBtn && footer) {
    StartBtn.classList.add('none');
    footer.classList.remove('none');
  }
}
