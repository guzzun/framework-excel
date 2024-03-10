import {range} from '@core/utils';

export const matrix = ($target, $current) => {
  const target = $target.id(true);
  const current = $current.id(true);
  const colls = range(current.coll, target.coll);
  const rows = range(current.row, target.row);

  return colls.reduce((previous, current) => {
    rows.forEach((item) => {
      previous.push(`${item}:${current}`);
    });
    return previous;
  }, []);
};

// {row, coll} - destructuring;
export const nextSelector = (key, {row, coll}) => {
  const MIN_VALUE = 0;
  const MAX_ROWS = 35;
  const MAX_COLLS = 25;

  switch (key) {
    case 'ArrowDown':
    case 'Enter':
      row = row + 1 > MAX_ROWS ? MAX_ROWS : row + 1;
      // row++;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
    case 'ArrowRight':
    case 'Tab':
      coll = coll + 1 > MAX_COLLS ? MAX_COLLS : coll + 1;
      // coll++;
      break;
    case 'ArrowLeft':
      coll = coll - 1 < MIN_VALUE ? MIN_VALUE : coll - 1;
      break;
    default:
      break;
  }

  return `[data-id="${row}:${coll}"]`;
};

