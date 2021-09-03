import './admin_login_pop-up.scss';
import { BaseComponent } from '../../../page/base-component';
import { addComponent } from '../../../page/add_component';
import { handlerAdminLoginPopUp } from '../../event_handler/event_handler';

export class AdminLoginPopUp extends BaseComponent {
  constructor() {
    super('div', ['wrap-pop-up']);
    this.element.innerHTML = `
        <div class="login-pop-up">
        <p class="login-title">Login</p>
        <label class="login__label" for="add-category__input">login
          <input class="login__input" id="add-category__input" type="text" value="Admin">
        </label>
        <label class="password__label" for="add-category__input">password
          <input class="password__input" id="add-category__input" type="password" value="Admin">
        </label>
        <div class="login__btns">
          <button class="login__cancel-btn">Cancel</button>
          <button class="login__login-btn">Create</button>
        </div>
    </div>
      `;

    this.element.onclick = (event:MouseEvent):void => {
      handlerAdminLoginPopUp(event);
    };
  }
}

export function addAdminLoginPopUp():void {
  const { body } = document;
  const element = new AdminLoginPopUp();
  addComponent(body, element.element);
}
