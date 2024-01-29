import {$} from '@core/dom';

class Excel {
  constructor(selector, options) {
    // daca lucram cu DOM, adaugam $
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // $el.innerHTML = component.toHTML();
      $el.html(component.toHTML());
      // eslint-disable-next-line no-debugger
      // debugger;
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => {
      component.init();
    });
  }
}

export default Excel;
