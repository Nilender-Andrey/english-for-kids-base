export function getTheColumnToSort(event:MouseEvent):number {
  const tableTitle = document.querySelectorAll('.table-title');
  let indexTitle = 0;
  tableTitle.forEach((th):void => {
    if (event.target instanceof HTMLElement) {
      if (th.className === event.target.className) {
        indexTitle = Array.from(tableTitle).indexOf(th);
      }
    }
  });
  return indexTitle;
}

export function sorting(column:number, direction?:boolean):void {
  const table = document.querySelector('table');
  let sortedRows: HTMLTableRowElement[] = [];

  if (table) {
    if (column <= 2) {
      let a = -1;
      let b = 1;
      if (direction) {
        a = 1;
        b = -1;
      }

      sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => (rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? a : b));
    } else if (column > 2) {
      sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => (+rowA.cells[column].innerHTML - +rowB.cells[column].innerHTML));

      if (direction) {
        sortedRows = Array.from(table.rows)
          .slice(1)
          .sort((rowA, rowB) => (+rowB.cells[column].innerHTML - +rowA.cells[column].innerHTML));
      }
    }

    table.tBodies[0].append(...sortedRows);
  }
}
