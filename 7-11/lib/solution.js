'use strict';

module.exports = function maxGap (numbers){
	let sorted = numbers.sort((a, b) => a - b)
	return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
}