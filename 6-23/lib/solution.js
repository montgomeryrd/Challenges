'use strict';

module.exports = function rowWeights(array){
	let one = [], two = [], answer = [];

	if(array.length === 1) return [array[0], 0];

	for(let i = 0 ; i < array.length ; i++) {
		if(i % 2 === 0) {
			one.push(array[i]);
		} else {
			two.push(array[i]);
		}
	}

	answer.push(one.reduce((a, b) => a + b));
	answer.push(two.reduce((a, b) => a + b));

	return answer;
}

//Better Solution:  

// function rowWeights(array){
// let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
// let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

// return [t1, t2]
// }
