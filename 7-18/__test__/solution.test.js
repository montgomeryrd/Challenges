'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should check if the argument is a palindrome, same forwards as backwards', () => {
		expect(Solution('Amore, Roma')).toEqual(true);
	});

	it('should check if the argument is a palindrome, same forwards as backwards', () => {
		expect(Solution('A man, a plan, a canal: Panama')).toEqual(true);
	});

	it('should check if the argument is a palindrome, same forwards as backwards', () => {
		expect(Solution('No \'x\' in \'Nixon\'')).toEqual(true);
	});

	it('should check if the argument is a palindrome, same forwards as backwards', () => {
		expect(Solution('Abba Zabba, you\'re my only friend')).toEqual(false);
	});

	it('should check if the argument is a palindrome, same forwards as backwards', () => {
		expect(Solution('Jansjo snaJ')).toEqual(false);
	});
});