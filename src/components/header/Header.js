import ExcelComponent from '@core/ExcelComponent';

class Header extends ExcelComponent {
  static className = 'excel__header';
  toHTML() {
    return `<input class="input" type="text" placeholder="New table">
    <div>
        <div class="button">
            <span class="material-symbols-outlined">
                delete
            </span>
        </div>
        <div class="button">
            <span class="material-symbols-outlined">
                exit_to_app
            </span>
        </div>
    </div>`;
  }
}

export default Header;

