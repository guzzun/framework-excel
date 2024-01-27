class Dom {
  constructor(selector) {
    this.el = typeof selector === 'string' ?
    document.querySelector(selector) : selector;
  }
  // add
  html(html) {
    if (typeof html === 'string') {
      this.el.innerHTML = html;
      return this;
    }
    return this.el.outerHTML;
  }
  // delete
  clear() {
    this.html('');
    return this; // pattern chain
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};
