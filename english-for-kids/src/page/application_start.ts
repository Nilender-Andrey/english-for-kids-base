import { addComponent } from './add_component';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export function applicationStart():void {
  const { body } = document;
  const elements = [new Header(), new Main(), new Footer()];
  elements.forEach((elem) => { addComponent(body, elem.element); });
}
