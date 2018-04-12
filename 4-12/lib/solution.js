'use strict';

module.exports = function high(x){
  let word = [];
  let total = 0;
  let str = x.split(' ');
  let highest = 0;
  let position = 0;
  
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str[i].length; j++){
      total += str[i].charCodeAt(j) - 96;
    }
    word.push(total);
    total = 0;    
  }
  for(let k = 0 ; k < word.length ; k++){
    if(word[k] > highest){
      highest = word[k];
      position = [k];
    }
  }
  return str[position];
}