import ExcelComponent from '@core/ExcelComponent';

class Formula extends ExcelComponent {
  static className = 'excel__formula';
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['Click', 'Input'],
    });
  }
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}

export default Formula;
