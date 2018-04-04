import forEach from './utils/forEach';

class ResponsiveTable {
  constructor(elem) {
    this.elem = elem;
    this.heads = this.elem.querySelectorAll('th');
    this.rows = this.elem.querySelectorAll('tr');

    this.init();
  }

  init() {
    if (!this.heads) {
      return;
    }

    forEach(this.rows, row => {
      const cells = row.querySelectorAll('td');

      forEach(cells, (cell, index) => {
        const label = this.heads[index] ? this.heads[index].innerText : '';
        if (label) {
          cell.setAttribute('data-th', label);
        }
      });
    });
  }
}

const tables = document.querySelectorAll('table');

if (tables) {
  forEach(tables, elem => new ResponsiveTable(elem));
}

export default ResponsiveTable;
