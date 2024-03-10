import ExcelComponent from '@core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';
import {matrix, nextSelector} from '@core/functions';
import {$} from '@core/dom.js';

class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
    });
  }

  // WillMount()
  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    // if (event.target.dataset.type === 'resizable') {
    if (event.target.dataset.resize) {
      resizeHandler(event, this.$root);
    } else if (event.target.dataset.type === 'cell') {
      const $target = $(event.target);
      if (event.shiftKey) {
        const idS = matrix($target, this.selection.current);
        const $cells = idS.map((item) => {
          return this.$root.find(`[data-id="${item}"]`);
        });
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }

  onKeydown(event) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Enter', 'Tab'];
    const {key} = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const current = this.selection.current.id(true);
      const next = this.$root.find(nextSelector(key, current));
      this.selection.select(next);
    }
  }

  toHTML() {
    return createTable(35);
  }
}

export default Table;
