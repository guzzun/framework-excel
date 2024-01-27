import ExcelComponent from '@core/ExcelComponent';

class Table extends ExcelComponent {
  static className = 'excel__table';
  toHTML() {
    return `<div class="row">
    <div class="row-info">1</div>
    <div class="row-data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
        <div class="column">E</div>
        <div class="column">F</div>
    </div>
    </div>
    <!-- row -->
    <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
        </div>
    </div>
    <!-- row -->
    <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
            <div class="cell selected" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
            <div class="cell" contenteditable="true"></div>
        </div>
    </div>`;
  }
}

export default Table;
