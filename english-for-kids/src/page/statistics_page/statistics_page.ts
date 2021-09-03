import './statistics_page.scss';
import { BaseComponent } from '../base-component';
import { HandlerStatisticsPade } from '../../events/event_statistics_pade';

export class Statistic extends BaseComponent {
  constructor() {
    super('div', ['statistic'], 'statistic_page');
    this.element.innerHTML = `
    <div class="header-statistic">
    <h2 class="statistic-title">Statistics</h2>
    <div class="btn-wrap">
    <button class="btn repeat-words">Repeat difficult words</button>
    <button class="btn reset">Reset</button>
    </div>
    </div>
  
  <table class="table">
    <thead>
      <tr>
        <th class="table-title" data-colomn="0">Categories</th>
        <th class="table-title" data-colomn="1">Words</th>
        <th class="table-title" data-colomn="2">Translation</th>
        <th class="table-title" data-colomn="3">Training</th>
        <th class="table-title" data-colomn="4">Correct</th>
        <th class="table-title" data-colomn="5">Incorrect</th>
        <th class="table-title" data-colomn="6">%</th>
      </tr>
    </thead>
    <tbody class="tbody">
     </tbody>


  </table>
   `;

    this.element.onclick = (event:MouseEvent):void => {
      HandlerStatisticsPade(event);
    };
  }

  render():HTMLElement {
    return this.element;
  }
}
