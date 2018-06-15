'use strict';

module.exports = function GetSum( a,b ){
    let arr = [];
    let swap;
    
    if(a > b){
        swap = a;
        a = b;
        b = swap;
    }
      
    for(let i = a ; i <= b ; i++) {
        arr.push(i);
    }
    
    return arr.reduce((acc, curr) => acc + curr);
}

//Ugh

// module.exports = function GetSum(a, b) {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }