import { getCards } from '../api/api';
import { administratorPageGeneration } from '../page/administrator_page_generation';

export function openAdminPage():void {
  const body = document.querySelector<HTMLElement>('body');

  if (body) {
    body.innerHTML = '';
  }

  administratorPageGeneration();
}

export function handlerAdminLoginPopUp(event:MouseEvent):void {
  const wrapLoginPopUp = document.querySelector('.wrap-pop-up');

  if (event.target instanceof HTMLElement) {
    if (event.target.closest('button.login__cancel-btn')) {
      if (wrapLoginPopUp) {
        wrapLoginPopUp.remove();
      }
    } else

    if (event.target.closest('button.login__login-btn')) {
      if (wrapLoginPopUp) {
        openAdminPage();
      }
    }
  }
}
