export function answeredCard(card:HTMLElement):void {
  card.style.pointerEvents = 'none';
  card.style.filter = 'opacity(0.5)';
}
/*
export function defaultCard():void {
  const cards = document.querySelectorAll <HTMLElement>('.carts-container');

  cards.forEach((card) => {
    card.style.pointerEvents = 'auto';
    card.style.filter = 'none';
  });
}
*/
