/* eslint-disable no-unused-vars */
const CODES = {
  A: 65,
  Z: 90,
};

const createRows = (index, content) => {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
  <div class="row" data-type="resizable">
    <div class="row-info">${index ? index : ''}
      ${resizer}
    </div>
    <div class="row-data">${content}</div>
  </div>`;
};

const createCols = (col) => {
  return `
  <div class="column" data-type="resizable">${col}
    <div class="col-resize" data-resize="col"></div>
  </div>`;
};

const createCell = () => {
  return `<div class="cell" contenteditable="true"></div>`;
};

const toChar = (_item, index) => {
  return String.fromCharCode(CODES.A + index);
};

const createCol = (item) => {
  return createCols(item);
};

export const createTable = (rowsCount = 15) => {
  const rows = [];
  const colsCount = CODES.Z - CODES.A;
  const cols = new Array(colsCount + 1).fill('').map(toChar).map(createCol).join('');
  rows.push(createRows(null, cols));
  for (let i = 0; i <= rowsCount; i++) {
    const cells = new Array(colsCount + 1).fill('').map(createCell).join('');
    rows.push(createRows(i + 1, cells));
  }
  return rows.join('');
};


