'use strict';

module.exports = function midEndian(n){
  let hexidecimal = n.toString(16);
  let hd = hexidecimal.toUpperCase().split('');
  
  if(hd.length % 2 === 1) hd.unshift('0');
  
  hexidecimal = hd.join('');
  
  let addresses = hexidecimal.match(/../g);
  let answer = [];
  
  for(let i = 0 ; i < addresses.length ; i+= 2) {
    answer.push(addresses[i]);
    if(addresses[i + 1] !== undefined) answer.unshift(addresses[i + 1]);
  }
  return answer.join('');
}

//Cleaner Solution:

// function midEndian(n) {
//   let hex = n.toString(16);

//   if (hex.length % 2)
//     hex = '0' + hex;

//   hex = hex.match(/../g);
//   let res = hex.shift();

//   while (hex.length)
//     res = hex.shift() + res + (hex.shift() || '');

//   return res.toUpperCase();
// }