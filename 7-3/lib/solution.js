'use strict';

module.exports = function isomorph(a, b) {
	const check = (string)=> {
		let hash = {};
		for (let i = 1; i < a.length; i++)
		if (!hash[string[i]]) 
			hash[string[i]] = i
			console.log(hash)
		return string.split('').map(lett=> hash[lett]).join``
	}
	return check(a) === check(b)
}