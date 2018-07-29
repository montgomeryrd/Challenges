'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should calculate how many years it will take to reach a population with value "p"', () => {
		expect(Solution(1500, 5, 100, 5000)).toEqual(15);
	});

	it('should calculate how many years it will take to reach a population with value "p"', () => {
		expect(Solution(1500000, 2.5, 10000, 2000000)).toEqual(10);
	});

	it('should calculate how many years it will take to reach a population with value "p"', () => {
		expect(Solution(1500000, 0.25, 1000, 2000000)).toEqual(94);
	});

	it('should calculate how many years it will take to reach a population with value "p"', () => {
		expect(Solution(1500000, 0.25, -1000, 2000000)).toEqual(151);
	});

	it('should calculate how many years it will take to reach a population with value "p"', () => {
		expect(Solution(1500000, 0.25, 1, 2000000)).toEqual(116);
	});
});