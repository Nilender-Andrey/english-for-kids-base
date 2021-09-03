import { showStatistics } from './show_statistics';

export function resetLocalStorage():void {
  localStorage.clear();
  showStatistics();
}
