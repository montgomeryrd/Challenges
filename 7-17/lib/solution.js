'use strict';

module.exports = function countZeros(n) {
	let answer = 0;
	
	for(let i = 1 ; i <= n ; i++) {
		/0/g.test(i) ? answer += i.toString().match(/0/g).length : answer;
	}
	return answer;
}

// Alternate Solution
// function countZeros(n) {
// 	let numbers = [];
// 	for(let i = 1 ; i <= n ; i++) {
// 		numbers.push(i);
// 	}
// 	return numbers.join('').toString().match(/0/g).length
// }