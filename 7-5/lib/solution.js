'use strict';

module.exports = function printerError(s) {
	return s.match(/[n-z]/g) === null ? `0/${s.split('').length}` : `${s.match(/[n-z]/g).length}/${s.split('').length}`;
}