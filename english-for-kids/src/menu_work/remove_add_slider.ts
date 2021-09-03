export function removeAddSlider(show:boolean):void {
  const slider = document.querySelector <HTMLElement>('.slider');
  const text = document.querySelector <HTMLElement>('.text');
  if (slider && text) {
    if (show) {
      slider.style.display = 'inline-block';
      text.style.display = 'inline';
    } else {
      slider.style.display = 'none';
      text.style.display = 'none';
    }
  }
}
