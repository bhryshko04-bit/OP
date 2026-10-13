'use strict';

const random = (min, max) => {
 if (max === undefined) [min, max] = [0, min];
 return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = { random };
