'use strict';

module.exports = function digital_root(n) {
    let number;
    
    while(n > 9) {
        number = n.toString().split('');
        
        for(let i = 0 ; i < number.length ; i++) {
            number[i] = parseInt(number[i]);
        }
        number = number.reduce((accumulator, currentValue) => accumulator + currentValue)
        n = number;
    }
    return n;
}