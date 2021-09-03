import { state } from '../config/state_game';
import { Statistic } from './statistics_page/statistics_page';

export function addPage(dataset:string):void {
  const mainWrap = document.querySelector <HTMLElement>('.main-wrap');
  let page: Statistic | null = null;
  if (mainWrap) {
    mainWrap.innerHTML = '';
    mainWrap.dataset.set = dataset;

    switch (dataset) {
      case state.statisticPage: {
        page = new Statistic();
        break;
      }
      case state.adminPage: {
        break;
      }
      default:
    }

    if (page) {
      mainWrap.appendChild(page.render());
    }
  }
}
