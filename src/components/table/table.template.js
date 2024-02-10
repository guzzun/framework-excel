/* eslint-disable no-unused-vars */
const CODES = {
  A: 65,
  Z: 90,
};

const createRows = (index, content) => {
  return `
  <div class="row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
  </div>`;
};

const createCols = (col) => {
  return `<div class="column">${col}</div>`;
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
