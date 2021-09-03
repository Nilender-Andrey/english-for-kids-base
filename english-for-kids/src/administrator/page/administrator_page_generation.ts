import { AdminPage } from './admin_page/admin_page';

export function administratorPageGeneration():void {
  const { body } = document;
  const elements = new AdminPage();

  body.replaceWith(elements.element);
}
