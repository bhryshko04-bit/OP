'use strict';

const range = (start, end) => {
  const list = [];
  let n = start;
  while (n <= end) {
    list.push(n);
    n++;
  }
  return list;
};

module.exports = { range };
