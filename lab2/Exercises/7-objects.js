'use strict';

const fn = () => {
  const a = { name: 'Petro' };
  let b = { name: 'Petro' };
  // const захищає лише змінну, тому поле об`єкта можна змінити
  a.name = 'Ivan';
  b.name = 'Ivan';
  // let дозволяє інший об`єкт; для const буде помидка TypeError
  b = { name: 'Nazar' };
};

module.exports = { fn };
