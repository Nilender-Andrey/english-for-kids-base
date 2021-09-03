import './admin_page.scss';
import { BaseComponent } from '../../../page/base-component';

export class AdminPage extends BaseComponent {
  constructor() {
    super('body', ['adminPage']);
    this.element.innerHTML = `
    <header class="header-admin">
      <div class="header-admin__wrap">
        <div class="btn-wrap">
          <button class="categories-btn btn-admin">Categories</button>
          <button class="words-btn btn-admin">Words</button>
        </div>
        <button class="logOut-btn btn-admin">Log out</button>
      </div>
    </header>

    <main class="main-admin" data-set="main-admin">
      <div class="main-admin__wrap">
      </div>
    </main>
    `;

    this.element.onclick = (event:MouseEvent):void => {

    };
  }
}
