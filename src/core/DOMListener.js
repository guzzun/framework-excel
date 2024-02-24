import {capitalize} from './utils';

class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No ${$root} provided for this listener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method =`on${capitalize(listener)}`;
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`method ${method} is not implemented in ${name}`);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const method=`on${capitalize(listener)}`;
      this.$root.off(listener, this[method].bind(this));
    });
  }
}

export default DOMListener;
