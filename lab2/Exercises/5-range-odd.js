'use strict';

const rangeOdd = (start, end) => {
  const list = [];
  for (let n = start % 2 === 0 ? start + 1 : start; n <= end; n += 2) {
    list.push(n);
  }
  return list;
};

module.exports = { rangeOdd };
