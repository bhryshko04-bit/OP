'use strict';

const phonebook = {
  'Marcus': '+380445554433',
  'Bohdan': '+380936992339',
};

const findPhoneByName = (key) => phonebook[key];

module.exports = { phonebook, findPhoneByName };
