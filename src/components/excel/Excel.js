import {$} from '@core/dom';

class Excel {
  constructor(selector, options) {
    // daca lucram cu DOM, adaugam $
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // const $root = document.createElement('div');
    // $root.classList.add('excel');
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className);
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // $el.innerHTML = component.toHTML();
      $el.html(component.toHTML());
      // eslint-disable-next-line no-debugger
      // debugger;
      $root.append($el);
      // $root.insertAdjacentHTML('beforeend', component.toHTML());
    });
    return $root;
  }

  render() {
    // const title = document.createElement('h1');
    // title.textContent = 'Text';
    // this.$el.append(title);
    this.$el.append(this.getRoot());
    // this.$el.insertAdjacentHTML('after begin', `<h1>lorem</h1>`);
  }
}

export default Excel;
