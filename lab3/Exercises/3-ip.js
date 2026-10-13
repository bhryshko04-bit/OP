'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');
  return parts.reduce((acc, part) => (acc << 8) + Number(part), 0);
};

module.exports = { ipToInt };
