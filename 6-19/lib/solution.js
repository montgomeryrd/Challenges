'use strict';

module.exports = function insideOut(x){
    let string = x.split(' ');
    let half, first = [], second = [];
    let answer = [];
    
    for(let i = 0 ; i < string.length ; i++) {
        let word = string[i].split('');
    
        if(word.length < 4) {
            answer.push(word.join(''));
        } else if(word.length % 2 === 1) {
            half = Math.floor(word.length / 2);
            for(let x = 0 ; x < half ; x++) {
            first.unshift(word[x]);
            second.unshift(word[half + 1 + x]);
            }
            word = first.concat(word[half]).concat(second);
            answer.push(word.join(''));
            first = [];
            second = [];
        } else if(word.length % 2 === 0) {
            half = word.length / 2;
            for(let y = 0 ; y < half ; y++) {
            first.unshift(word[y]);
            second.unshift(word[half + y]);
            }
            word = first.concat(second);
            answer.push(word.join(''));
            first = [];
            second = [];
        }
    }
    return answer.join(' ');
}


//Better Solution:

// function insideOut(x){
//     return x.split(' ').map(a => {    
//         var newWord = a.substring(0, Math.floor(a.length/2)).split('').reverse().join('');
//         if(a.length % 2 != 0) {
//             newWord += a[Math.floor(a.length/2)];
//             newWord += a.substring(Math.ceil(a.length/2)).split('').reverse().join('');
//         } else {
//             newWord += a.substring(Math.ceil(a.length/2)).split('').reverse().join('');
//         }
//         return newWord;  
//     }).join(' ');
// }