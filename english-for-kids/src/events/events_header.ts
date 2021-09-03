import { openAdminPage } from '../administrator/event_handler/event_handler';
import { addAdminLoginPopUp } from '../administrator/page/admin_login_pop-up/admin_login_pop-up';
import { Category } from '../config/state_cards';
import { state } from '../config/state_game';
import { restartGame } from '../game_work/restart_game';
import { addRemoveGameControl, changeCardsForTheGame, removeGameControl } from '../menu_work/add_remove_game_control';
import { addRemoveMenuControl } from '../menu_work/add_remove_menu_control';
import { highlightingNameMenu } from '../menu_work/highlighting_menu';
import { removeAddSlider } from '../menu_work/remove_add_slider';
import { addPage } from '../page/add_page';
import { addCard } from '../page/cards_generator';
import { addMainPageItem } from '../page/main_page_item_generator';
import { showStatistics } from '../statistic_work/show_statistics';

function wrapDefault() {
  const wrap = document.querySelector <HTMLElement>('.wrap');
  const wrapResult = document.querySelector <HTMLElement>('.wrap__result');
  const wrapImg = document.querySelector <HTMLImageElement>('.wrap__img');
  if (wrap && wrapResult && wrapImg) {
    wrapResult.innerHTML = '';
    wrapImg.style.display = 'none';
    wrapImg.src = '';
    wrap.classList.remove('super');
    wrap.classList.remove('fail');
  }
}

function openCloseMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const wrap = document.querySelector <HTMLElement>('.wrap');
  const body = document.querySelector <HTMLElement>('body');
  if (burger && menu && wrap) {
    burger.classList.toggle('active');
    menu.classList.toggle('clean');
    wrap.classList.toggle('none');
    wrapDefault();

    if (body) {
      if (menu.className === 'nav') {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
  }
}

function closeWrap() {
  const wrap = document.querySelector <HTMLElement>('.wrap');

  if (wrap) {
    wrap.classList.add('none');

    wrapDefault();
  }
}

function closeMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const body = document.querySelector <HTMLElement>('body');

  if (burger && menu && body) {
    burger.classList.remove('active');
    menu.classList.add('clean');
    body.style.overflow = 'auto';
  }
}

function stateSwitchPlayTrain() {
  const slider = document.querySelector('.slider');

  if (slider) {
    if (slider.className === 'slider train') {
      slider.classList.remove('train');

      restartGame();
    } else {
      slider.classList.add('train');
    }
  }
}

export function changeTrainingGames(event: Event): void {
  if (event.target instanceof HTMLInputElement) {
    state.menuGameControlState = event.target.checked;
    const mainWrap = document.querySelector <HTMLElement>('.main-wrap');

    if (mainWrap) {
      if (mainWrap.dataset.set === 'Main Page') {
        stateSwitchPlayTrain();
        addRemoveMenuControl();
      }
      if (mainWrap.dataset.set === 'game_page' || mainWrap.dataset.set === state.repeatPage) {
        stateSwitchPlayTrain();
        addRemoveGameControl();
        changeCardsForTheGame();
      }
    }
  }
}

export function headerClickEvents(event: MouseEvent): void {
  if (event.target instanceof HTMLElement) {
    if (event.target.closest('div.burger')) {
      openCloseMenu();
      highlightingNameMenu();
    }
    if (event.target.closest('div.wrap')) {
      if (state.endGame) {
        addMainPageItem();
        removeGameControl();

        addRemoveMenuControl();
        state.endGame = false;
        closeWrap();
      } else {
        closeWrap();
        closeMenu();
      }
    }
    if (event.target.closest('li')) {
      state.activeCategory = event.target.innerText;

      if (event.target.dataset.add === state.statisticsPage) {
        removeGameControl();
        removeAddSlider(false);
        addPage(state.statisticPage);
        showStatistics();
      } else

      if (event.target.dataset.add === state.menuPage) {
        removeGameControl();
        addMainPageItem();
        addRemoveMenuControl();
        removeAddSlider(true);
      } else

      if (event.target.dataset.add === state.adminPage) {
        addAdminLoginPopUp();
      } else

      if (state.activeCategory) {
        const item = Category.indexOf(state.activeCategory);

        if (item === -1) throw new Error('Menu category not added');
        else {
          addCard(item);
          removeAddSlider(true);
          addRemoveGameControl();
        }
      }
      restartGame();
      closeWrap();
      closeMenu();
    }
  }
}
