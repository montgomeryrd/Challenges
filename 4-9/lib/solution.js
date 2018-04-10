'use strict';

module.exports = function solution(array) {
    let counter = 0, distance = 0;
  
    while (typeof array[distance] !== 'undefined') {
      counter++;
      distance += array[distance];
      
      if (counter > array.length) {
        return -1;
      }
    }
  
    return array.length ? counter : -1;
  }