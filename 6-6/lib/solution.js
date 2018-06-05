'use strict';

module.exports = function solution(number){
    let count, threes = [], fives = [];
    if(number < 4) return 0;

    count = 3;
    while(count < number) {
      threes.push(count);
      count += 3;
    }
    
    count = 5;
    while(count < number) {
      fives.push(count);
      count += 5;
    }
    
    var output = threes.concat(fives);
    var output = output.filter(function(item, pos) {return output.indexOf(item) == pos});
    return output.reduce((accumulator, currentValue) => accumulator + currentValue);
}


//Cleaner Solution

// function solution(number){
//     var sum = 0;
    
//     for(var i = 1 ; i < number; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             sum += i
//         }
//     }
//     return sum;
// }