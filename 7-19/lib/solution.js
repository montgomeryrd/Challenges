'use strict';

module.exports = function nbYear(p0, percent, aug, p) {
	for(var i = 0 ; p0 < p; i++) {
		p0 = p0 * (1 + percent / 100) + aug;
	}
	return i;
}