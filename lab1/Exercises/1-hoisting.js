'use strict';
const fn = () => {
  const before = typeof later;
  function later() {}
  return before;
};
module.exports = { fn };
