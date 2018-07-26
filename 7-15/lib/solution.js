'use strict';

module.exports = function sortLetters(array) {

	let arr = array.reduce((a, b) => a.concat(b)).join('').toString().toUpperCase();
	
	let v = arr.match(/[AEIOU]/g);
	let c = arr.match(/[BCDFGHJKLMNPQRSTVWXYZ]/g);

	return v === null ? [[], c] : [v, c];
}

//Alternate Solution:

// function sortLetters(array) {
//   array = array.join('').toUpperCase().match(/[A-Z]/g);
//   return [array.filter(x => /[AEIOU]/.test(x)), array.filter(x=>/[^AEIOU]/.test(x))];
// }