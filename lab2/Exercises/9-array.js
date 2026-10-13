'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Bohdan', phone: '+380936992339' },
];

const findPhoneByName = (name) => {
  for (const r of phonebook) if (r.name === name) return r.phone;
};

module.exports = { phonebook, findPhoneByName };
