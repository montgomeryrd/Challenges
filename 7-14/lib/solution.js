'use strict';

module.exports =  function isAnagram(test, original) {
	let t = test.toLowerCase().split('').sort().join('');
	let o = original.toLowerCase().split('').sort().join('');
	return (t === o) ? true : false;
};