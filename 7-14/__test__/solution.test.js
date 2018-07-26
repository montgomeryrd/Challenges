'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should check whether two arguments are an anagram of one another', () => {
		expect(Solution("foefet", "toffee")).toEqual(true);
	});

	it('should check whether two arguments are an anagram of one another', () => {
		expect(Solution("Buckethead", "DeathCubeK")).toEqual(true);
	});

	it('should check whether two arguments are an anagram of one another', () => {
		expect(Solution("dumble", "bumble")).toEqual(false);
	});

	it('should check whether two arguments are an anagram of one another', () => {
		expect(Solution("ound", "round")).toEqual(false);
	});

	it('should check whether two arguments are an anagram of one another', () => {
		expect(Solution("apple", "pale")).toEqual(false);
	});

});