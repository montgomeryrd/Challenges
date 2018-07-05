'use strict';

module.exports = function isIsogram(str){
  str = str.toLowerCase();
  let string = str.split('');
  string = string.filter((val, index, array) => array.indexOf(val) === index);
  string = string.join('');
  
  return (string === str) ? true : false;
}

//Better using Regex:

// function isIsogram(str){ 
//   return !/(\w).*\1/i.test(str)
// }