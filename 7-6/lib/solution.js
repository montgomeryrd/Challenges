'use strict';

module.exports = function sortMyString(S) {
  let t1 = S.split('').filter((x, i) => i % 2 == 0).join('');
  let t2 = S.split('').filter((x, i) => i % 2 == 1).join('');
  return `${t1} ${t2}`;
}