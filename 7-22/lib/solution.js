'use strict';

module.exports = function encode(str, n) {
	let hash = {};
	let alphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
	for(let i = 0 ; i < alphabet.length ; i++) {
		hash[alphabet[i]] = i + 1;;
	}
	
	let message = [];
	let itr = 0;
	while(itr < str.length) {
		for(let key in hash) {
			if(key === str[itr]) message.push(hash[key]);
		}
		itr++;
	}
	
	let cypher = n.toString().split('').map(x => parseInt(x));
	let count = 0;
	if(message.length < cypher.length) return message.map((x, i) => x += cypher[i]);
	while(message.length > cypher.length) {
		cypher.push(cypher[count])
		count++;
	}
	return message.map((x, i) => x += cypher[i]);
}

//Christ!

// function encode(str, n) {
//   const key = String(n);
//   return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]));
// }