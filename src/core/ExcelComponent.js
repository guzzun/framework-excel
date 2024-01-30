import DOMListener from './DOMListener';

class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name;
  }
  toHTML() {
  }
  init() {
    this.initDOMListeners();
  }
}

export default ExcelComponent;
