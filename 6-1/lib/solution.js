'use strict';

module.exports = function add(x, y) {
    if (y == 0) return x;
    let sum = x ^ y;    
    let carry = (x & y) << 1;
    return add(sum, carry);  
}

//Refactored Solution

// function add(x, y) {
//     return y ? add(x ^ y,(x & y) << 1) : x;
// }