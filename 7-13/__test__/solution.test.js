'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should concat inner arrays and sort by appreciating value', () => {
		expect(Solution([])).toEqual([]);
	});

	it('should concat inner arrays and sort by appreciating value', () => {
		expect(Solution([[], [1]])).toEqual([1]);
	});

	it('should concat inner arrays and sort by appreciating value', () => {
		expect(Solution([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});

	it('should concat inner arrays and sort by appreciating value', () => {
		expect(Solution([[1, 3, 5], [100], [2, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 100]);
	});

	it('should concat inner arrays and sort by appreciating value', () => {
		expect(Solution([[8, 3], [23, 35, 17], [1], 255, 7887])).toEqual([1, 3, 8, 17, 23, 35, 255, 7887]);
	});
});