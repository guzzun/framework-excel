import ExcelComponent from '@core/ExcelComponent';

class Formula extends ExcelComponent {
  static className = 'excel__formula';
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['click', 'input'],
    });
  }
  onClick(event) {
    console.log('formulaClick', event.target.textContent);
  }
  onInput(event) {
    console.log(event.target.textContent.trim());
  }
  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}

export default Formula;
