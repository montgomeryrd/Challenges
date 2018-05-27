'use strict';

module.exports = function highestRank(arr) {
    let count = 0;
    let rank = 0;
    let highest = 0;

    for(let i = 0 ; i < arr.length ; i++) {
        for(let j = 0 ; j < arr.length ; j++) {
            if(arr[i] === arr[j]) {
                count++
            }
        }
        if(count > highest) {
            rank = arr[i];
            highest = count;
        }
        count = 0;
    }
    return curr;
}