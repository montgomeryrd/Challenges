'use strict';

module.exports = function friendFind(line){

    let total = 0;

    for(let i = 0 ; i < line.length ; i++) {
        if(
            (line[i] === 'red' && line[i + 1] === 'blue' && line[i + 2] === 'blue') ||
            (line[i - 1] === 'blue' && line[i] === 'red' && line[i + 1] === 'blue') ||
            (line[i - 2] === 'blue' && line[i - 1] === 'blue' && line[i] === 'red')
        )
        total += 1;
    }
    return total;
}