'use strict';

module.exports = function palindrome(string) {
	let str = string.replace(/\W/g, '')
	let reverse = [];
	
	for(let i = 0 ; i < str.length ; i++) {
		reverse.unshift(str[i]);
	}
	return str.toLowerCase() === reverse.join('').toLowerCase() ? true : false;
}