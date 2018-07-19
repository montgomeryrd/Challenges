'use strict';

module.exports = function wave(string){
	let capitalize = 0;
	let temp = [];
	let answer = [];
	let split = string.split('');
	
	while(capitalize < string.length) {
		for(let i = 0 ; i < split.length ; i++) {
			capitalize === i ? temp.push(split[i].toUpperCase()) : temp.push(split[i]);
		}
		answer.push(temp.join(''));
		temp = [];
		capitalize++;
	} 
	while(answer.indexOf(string) !== -1) {
		answer.splice(answer.indexOf(string), 1)
	}
	return answer;
}

//Solution I wanted:

// function wave(str) {
//   return str.split('').map((l, i, a) => {
//     let c = a.slice();
//     c[i] = c[i].toUpperCase();
//     return c.join('');
//   }).filter((w, i) => w[i] !== ' ');
// }