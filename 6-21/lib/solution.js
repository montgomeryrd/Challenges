'use strict';

module.exports = function merge(line) {
    line.sort((a, b) => b - a);
    console.log(line)
    
    let answer = [];
    
    for(let i = 0 ; i < line.length ; i++){
        if(line[i] === line[i + 1] && line[i] !== 0) {
            answer.push(line[i] * 2);
            answer.push(0);
            i++;
        } else {
            answer.push(line[i]);
        }
    }
    return answer.sort((a, b) => b - a);
};