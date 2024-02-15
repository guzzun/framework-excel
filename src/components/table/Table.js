import ExcelComponent from '@core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom';

class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
      // listeners: ['mouseup', 'mousedown', 'mousemove'],
    });
  }
  // onMousemove(event) {
  //   console.log('mouseMove', event.target);
  // }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const $parent = $resizer.$el.parentNode; == nu treb de utilizate
      // const $parent = $resizer.$el.closest('.column'); == mai bun, da tot nu
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      // console.log(coords.width);
      document.onmousemove = (event) => {
        const delta = event.pageX - coords.right;
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
        console.log(delta);
        console.log(value);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
  // onMouseup(event) {
  //   console.log('mouseUp', event.target);
  // }'
  toHTML() {
    return createTable();
  }
}

export default Table;
