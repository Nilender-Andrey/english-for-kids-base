export function addComponent(body: HTMLElement, component: HTMLElement):void {
  body.appendChild(component);
}

export function generateElement(tag:string, text:string, parent:HTMLElement,
  className?:string, data?:string):HTMLElement {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }
  if (data) {
    element.dataset.add = data;
  }
  parent.append(element);

  element.innerText = text;

  return element;
}
