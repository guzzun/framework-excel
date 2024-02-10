import ExcelComponent from '@core/ExcelComponent';
import {createTable} from './table.template';

class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mouseup', 'mousedown', 'mousemove'],
    });
  }
  onMouseup(event) {
    console.log('mouseUp', event.target);
  }
  onMousedown(event) {
    console.log('mouseDown', event.target);
  }
  onMousemove(event) {
    console.log('mouseMove', event.target);
  }
  toHTML() {
    return createTable();
  }
}

export default Table;
