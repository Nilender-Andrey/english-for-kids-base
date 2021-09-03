import { state } from '../config/state_game';
import { shuffleArr } from '../utils/shuffle_arr';
import { playSound } from '../utils/play_sound';
import { changeDataLocalStorage } from '../statistic_work/local_storage';

export function cardClickHandler(event: MouseEvent): void {
  if (!state.menuGameControlState) {
    const mainWrap = document.querySelector('.main-wrap');
    if (event.currentTarget instanceof HTMLElement) {
      changeDataLocalStorage(event.currentTarget.id, 1);
    }
    if (event.target instanceof HTMLElement) {
      const { id } = event.target.dataset;

      if (id) {
        const card = document.getElementById(id);
        if (card) {
          card.classList.add('flipped');
          card.onmouseleave = (e):void => {
            if (e.relatedTarget === mainWrap || e.target === card) {
              card.classList.remove('flipped');
            }
          };
        }
      } else if (event.currentTarget instanceof HTMLElement) {
        const idCard = event.currentTarget.id;
        if (!document.getElementById(idCard)?.classList.contains('flipped')) playSound(idCard);
      }
    }
  }
}

export function startButtonHandler(event:MouseEvent):void {
  if (event.target instanceof HTMLElement) {
    if (event.target.dataset.set === 'repeat') {
      playSound(state.mixedSounds[state.step]);
    }
    if (event.target.dataset.set === 'start') {
      event.target.innerHTML = `Repeat <svg width="26" height="22" viewBox="0 0 26 22" fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0078 19.1047C13.0078 19.5627 12.7432 19.9789 
      12.329 20.1731C12.1689 20.2488 11.9973 20.2854 11.8268 20.2854C11.5569 20.2854 
      11.2895 20.1926 11.0734 20.0135L4.61856 14.6647H1.1807C0.52873 14.6653 0 14.1363 
      0 13.4843V8.78023C0 8.12798 0.52873 7.59925 1.1807 7.59925H4.61884L11.0737 
      2.25047C11.4264 1.95816 11.9154 1.89584 12.3293 2.09146C12.7432 2.28568 
      13.0081 2.70207 13.0081 3.15982L13.0078 19.1047ZM17.5453 17.2598C17.5166 
      17.2617 17.4889 17.2628 17.4604 17.2628C17.1485 17.2628 16.8478 17.1396 16.6257 
      16.9171L16.4678 16.7587C16.0536 16.3454 16.005 15.6906 16.3537 15.2206C17.2379 
      14.0284 17.7046 12.6152 17.7046 11.1327C17.7046 9.53811 17.1748 8.04247 16.1721 
      6.80727C15.7904 6.33779 15.8256 5.65591 16.2534 5.22835L16.411 5.07045C16.6469 
      4.83459 16.963 4.70604 17.305 4.72644C17.6381 4.74321 17.9492 4.89999 18.1604 
      5.1582C19.5513 6.86009 20.286 8.92638 20.286 11.133C20.286 13.1881 19.6362 15.1443 
      18.4066 16.7891C18.2012 17.0633 17.8871 17.2354 17.5453 17.2598ZM22.4269 
      20.9086C22.2134 21.161 21.9046 21.3124 21.574 21.3264C21.5578 21.327 21.5413 
      21.3275 21.5245 21.3275C21.2118 21.3275 20.9117 21.204 20.6895 20.9818L20.5344
       20.8267C20.101 20.3936 20.0716 19.7008 20.4657 19.2319C22.3699 16.9672 23.4189 
       14.091 23.4189 11.1327C23.4189 8.0556 22.2958 5.09337 20.2572 2.79177C19.8439 
       2.32452 19.8648 1.61722 20.3047 1.17568L20.4595 1.02058C20.6892 0.789752 20.9877 
       0.6626 21.33 0.673499C21.655 0.682721 21.9624 0.826361 22.1784 1.06949C24.6427 
       3.84392 26 7.41816 26 11.1327C26.0006 14.7066 24.7315 18.1786 22.4269 20.9086Z" fill="white"/>
      </svg>`;
      event.target.dataset.set = 'repeat';
      event.target.classList.add('repeat');

      shuffleArr(state.categoryNumber);
      playSound(state.mixedSounds[state.step]);
      state.startGame = true;
    }
  }
}
