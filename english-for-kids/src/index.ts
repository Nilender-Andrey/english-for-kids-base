import { applicationStart } from './page/application_start';
import { addMainPageItem } from './page/main_page_item_generator';

import './style.scss';

window.onload = () => {
  applicationStart();
  addMainPageItem();
};
