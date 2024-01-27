import ExcelComponent from '@core/ExcelComponent';

class Formula extends ExcelComponent {
  static className = 'excel__formula';
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}

export default Formula;
