/* eslint-disable no-unused-vars */
const codes = {
  A: 65,
  Z: 90,
};

const createRows = (content) => {
  return `
  <div class="row">
    <div class="row-info"></div>
    <div class="row-data">${content}</div>
  </div>`;
};

const createCols = (col) => {
  return `<div class="column">${col}</div>`;
};

const createCell = () => {
  return `<div class="cell" contenteditable="true"></div>`;
};

export const createTable = (rowsCount = 15) => {
  const rows = [];
  const colsCount = codes.Z - codes.A;
  const cols = new Array(colsCount).fill('').map((item, index) => {
    return String.fromCharCode(codes.A + index);
  }).map((item) => {
    return createCols(item);
  }).join('');
  console.log(cols);
  rows.push(createRows(cols));
  for (let i = 0; i <= rowsCount; i++) {
    rows.push(createRows());
  }
  return rows.join('');
};
