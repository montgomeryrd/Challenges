'use strict';

module.exports = function convertHashToArray(hash) {
  let arr = [];
  for (var key in hash) {
    arr.push([key, hash[key]]);
  }
  return arr.sort();
}