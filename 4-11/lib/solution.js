'use strict';

module.exports = function champernowneDigit(n) {
  let champernowne = [];
  let count = 0;
  
  if(n === 0) return 'The value of "n" must be greater than 0'
  
  while(count !== n) {
    champernowne.push(count);
    count++;
  }
  
  champernowne = champernowne.join('').split('');
  return parseInt(champernowne[n - 1]);
}