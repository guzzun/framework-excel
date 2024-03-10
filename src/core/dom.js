class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string' ?
    document.querySelector(selector) : selector;
  }

  // add
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  // delete
  clear() {
    this.html('');
    return this; // pattern chain
  }

  append(node) {
    if (node instanceof Dom) {
      node=node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.el.removeEventListener(eventType, callback);
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        row: +parsed[0],
        coll: +parsed[1],
      };
    }
    return this.data.id;
  }

  focus() {
    this.$el.focus();
    return this;
  }

  /*
  height: '30px',
  width: '42px',
  background-color: 'red',
  */
  // css(styles = {}) {
  //   // for (const key in styles) {
  //   //   if (Object.hasOwnProperty.call(styles, key)) {
  //   //     const element = styles[key];
  //   //     console.log(key);
  //   //     console.log(element);
  //   //   }
  //   // }
  //   console.log('entries =', Object.entries(styles));
  // }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.$el.style[key] = styles[key];
    });
  }

  get data() {
    return this.$el.dataset;
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
