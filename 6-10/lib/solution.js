'use strict';

module.exports = function anagramDifference(w1,w2){
  
    let w1arr = w1.split(''), w2arr = w2.split('');

    for(let x = 0 ; x < w1arr.length ; x++) {
        
        for(let y = 0 ; y < w2arr.length ; y++) {
            if(w2arr[y] === w1arr[x]) {
                w2arr.splice(y, 1);
                w1arr.splice(x, 1);
                x--;
                y--;
            }
        }
    }
    return w1arr.length + w2arr.length;
}