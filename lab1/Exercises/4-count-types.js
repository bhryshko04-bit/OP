'use strict';

const countTypesInArray = (arr) =>
  arr.reduce((acc, item) => {
    const type = typeof item;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

module.exports = { countTypesInArray };
