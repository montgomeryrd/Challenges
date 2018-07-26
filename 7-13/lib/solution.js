'use strict';

module.exports = function flattenAndSort(array) {
	return array.reduce((x, y) => x.concat(y), []).sort((a, b) => a - b);
}