'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should return an array of vowels and an array of consonants in an array from the argument', () => {
		expect(Solution([[1,"a","H"],[3,"o","s"],[4,"E","i"]])).toEqual([["A","O","E","I"],["H","S"]]);
	});

	it('should return an array of vowels and an array of consonants in an array from the argument', () => {
		expect(Solution([["c","A",2],[5,"e","x"],[9,"W","U"]])).toEqual([["A","E","U"],["C","X","W"]]);
	});

	it('should return an array of vowels and an array of consonants in an array from the argument', () => {
		expect(Solution([["a",2,"Q"],["I",3,"n"],["E",6,"i"]])).toEqual([["A","I","E","I"],["Q","N"]]);
	});

	it('should return an array of vowels and an array of consonants in an array from the argument', () => {
		expect(Solution([[9,"i","H"],[0,"U","s"],[1,"o","J"]])).toEqual([["I","U","O"],["H","S","J"]]);
	});

	it('should return an array of vowels and an array of consonants in an array from the argument', () => {
		expect(Solution([[4,"w","h"],[8,"F","S"],[2,"d","M"]])).toEqual([[],["W","H","F","S","D","M"]]);
	});
});