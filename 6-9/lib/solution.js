'use strict';

module.exports = function solution(str){
    let string = str.split('');
    let answer = [];

    for(let i = 0 ; i < string.length ; i ++){
        if(string[i + 1] !== undefined) {
            answer.push(`${string[i]}${string[i + 1]}`);
            i++;
        } else if(string[i + 1] === undefined) {
            answer.push(`${string[i]}_`);
        }
    }
    return answer;
}


//Significantly Better Solution:

// function solution(str){
//     return (str + '_').match(/../g);
// }