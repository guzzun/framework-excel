import DOMListener from './DOMListener';

class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  toHTML() {
  }
  init() {
    this.initDOMListeners();
  }
}

export default ExcelComponent;
