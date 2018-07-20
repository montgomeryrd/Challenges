'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should return the number of vowels in a string', () => {
		expect(Solution('made enough progress')).toEqual(7);
	});

	it('should return the number of vowels in a string', () => {
		expect(Solution('stock market crash')).toEqual(4);
	});

	it('should return the number of vowels in a string', () => {
		expect(Solution('the dollar lost two thirds its value')).toEqual(10);
	});

	it('should return the number of vowels in a string', () => {
		expect(Solution('this time the dollar is going to lose its status as the market currency')).toEqual(21);
	});

	it('should return the number of vowels in a string', () => {
		expect(Solution('you gotta own gold')).toEqual(6);
	});
});