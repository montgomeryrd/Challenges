'use strict';

module.exports = function pigIt(str){
    let string = str.split(' '), strang, answer = [];
    
    for(let i = 0 ; i < string.length ; i++) {
        strang = string[i].split('');
        if(strang[0] !== '!' && strang[0] !== '?' && strang[0] !== '.') {
            strang.push(strang.shift() + 'ay');
        }
        answer.push(strang.join(''));
    }
    return answer.join(' ');
}



//Much Better Solution:

// module.exports = function pigIt(str){
//     return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
// }