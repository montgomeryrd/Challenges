'use strict';

module.exports = function countSmileys(arr) {
    arr = arr.join('');
    let regex = /:\)|;\)|:D|;D|:~\)|;~\)|:~D|;~D|:-D|;-D|:-\)|;-\)/gi;
    let matches = arr.match(regex);
    
    return (matches === null) ? 0 : matches.length;
}

//Better:

// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }