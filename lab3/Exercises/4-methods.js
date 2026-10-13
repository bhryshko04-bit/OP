'use strict';

const methods = (iface) => {
 const result = [];
 for (const name of Object.keys(iface)) {
  const item = iface[name];
  if (typeof item === 'function') {
   result.push([name, item.length]);
  }
 }
 return result;
};

module.exports = { methods };
