'use strict';

module.exports = function nthSmallest(arr, n) {
  arr.sort(function(a,b) {
    return a - b;
  })
  
  let array = arr.filter(function(element, position) {
    return arr.indexOf(element) == position;
  })

  return (n > array.length) ? null : array[n - 1];
}

//A Better Solution:

// function nthSmallest(arr, n) {
//   return Array.from(new Set(arr)).sort((a, b) => a - b)[n - 1] || null;
// }