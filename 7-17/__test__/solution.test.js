'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should return the number of zeros in digits from 1 to the given argument', () => {
		expect(Solution(12)).toEqual(1);
	});

	it('should return the number of zeros in digits from 1 to the given argument', () => {
		expect(Solution(100)).toEqual(11);
	});

	it('should return the number of zeros in digits from 1 to the given argument', () => {
		expect(Solution(200)).toEqual(31);
	});

	it('should return the number of zeros in digits from 1 to the given argument', () => {
		expect(Solution(2285)).toEqual(648);
	});

	it('should return the number of zeros in digits from 1 to the given argument', () => {
		expect(Solution(3920)).toEqual(1082);
	});
});