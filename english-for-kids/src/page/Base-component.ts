export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = [], id?:string) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    if (id) {
      this.element.id = id;
    }
  }
}
