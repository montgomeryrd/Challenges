'use strict';

module.exports = function maxTriSum(numbers){
	numbers.sort((a, b) => b - a);
	numbers = numbers.filter((ele, index, arr) => arr.indexOf(ele) == index);
	return numbers[0] + numbers[1] + numbers[2];
}

//Alternate Solution:

// const maxTriSum = numbers => {
//   const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
//   return a+b+c
// }