'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should sort the array of integers and return the maximum difference between consecutive integers', () => {
		expect(Solution([ 13, 10, 2, 9, 5 ])).toEqual(4);
	});

	it('should sort the array of integers and return the maximum difference between consecutive integers', () => {
		expect(Solution([ 13, 3, 5 ])).toEqual(8);
	});

	it('should sort the array of integers and return the maximum difference between consecutive integers', () => {
		expect(Solution([ 24, 299, 131, 14, 26, 25 ])).toEqual(168);
	});

	it('should sort the array of integers and return the maximum difference between consecutive integers', () => {
		expect(Solution([ -3, -27, -4, -2 ])).toEqual(23);
	});

	it('should sort the array of integers and return the maximum difference between consecutive integers', () => {
		expect(Solution([ -7, -42, -809, -14, -12 ])).toEqual(767);
	});
});