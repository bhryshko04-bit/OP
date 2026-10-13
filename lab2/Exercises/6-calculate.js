'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const resulte = [];
  for (let i = 0; i < 10; i++) {
    resulte.push(average(square(i), cube(i)));
  }
  return resulte;
};

module.exports = { square, cube, average, calculate };
