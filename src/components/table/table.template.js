const CODES = {
  A: 65,
  Z: 90,
};

const createRows = (content, index) => {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
  <div class="row" data-type="resizable">
    <div class="row-info">${index ? index : ''}
      ${resizer}
    </div>
    <div class="row-data">${content}</div>
  </div>`;
};

const createCols = (col, index) => {
  return `
  <div class="column" data-type="resizable" data-col=${index}>
    ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>`;
};

const createCell = (row, index) => {
  return (_, index) => {
    return `<div class="cell" contenteditable="true" data-col=${index} data-id="${row}:${index}" data-type="cell"></div>`;
  };
};

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount = 20) => {
  const rows = [];
  const colsCount = CODES.Z - CODES.A;

  const cols = new Array(colsCount + 1).fill('').map(toChar).map(createCols).join('');

  rows.push(createRows(cols));
  for (let i = 0; i <= rowsCount; i++) {
    const cells = new Array(colsCount + 1).fill('').map(createCell(i)).join('');
    rows.push(createRows(cells, i + 1));
  }
  return (`${rows.join('')}`);
};
