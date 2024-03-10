export class TableSelection {
  static className_1 = 'selected';
  static className_2 = 'selected-bg';
  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();

    this.group.push($el);
    $el.focus().addClass(TableSelection.className_1);
    this.current = $el;
  }

  clear() {
    this.group.forEach((cell) => {
      if (cell) {
        cell.removeClass(TableSelection.className_1);
        cell.removeClass(TableSelection.className_2);
      }
    });
    this.group = [];
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach((item) => {
      item.addClass(TableSelection.className_2);
      this.current.removeClass(TableSelection.className_2);
      this.current.addClass(TableSelection.className_1);
      // if (index === 0) {
      //   item.addClass(TableSelection.className_1);
      // } else {
      //   item.addClass(TableSelection.className_2);
      // }
    });
  }
}
