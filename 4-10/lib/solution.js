'use strict';

module.exports = function addedChar(s1, s2){
  let string1 = s1.split('');
  let string2 = s2.split('');
  let index;

  for(let i = 0 ; i < string2.length ; i++){
    if(string1.includes(string2[i])) {
      index = string1.findIndex(position => position === string2[i]);
      string2.splice([i], 1);
      string1.splice(index, 1);
      i--;
    }
  }
  return string2[0]
}

//Alternative Solution
function addedChar(s1, s2) {
  let code = 0;

  for (let i = 0; i < s2.length; i += 1)
      code += s2.charCodeAt(i) - ~~s1.charCodeAt(i);

  return String.fromCharCode(code / 3);
}