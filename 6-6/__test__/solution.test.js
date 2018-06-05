'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    it('should calculate the multiples of 3 and 5 of a given number, remove duplicate values, and return the sum of values', () => {
        expect(Solution(10)).toEqual(23);
    });

    it('should calculate the multiples of 3 and 5 of a given number, remove duplicate values, and return the sum of values', () => {
        expect(Solution(3)).toEqual(0);
    });

    it('should calculate the multiples of 3 and 5 of a given number, remove duplicate values, and return the sum of values', () => {
        expect(Solution(15)).toEqual(45);
    });

    it('should calculate the multiples of 3 and 5 of a given number, remove duplicate values, and return the sum of values', () => {
        expect(Solution(26)).toEqual(168);
    });

    it('should calculate the multiples of 3 and 5 of a given number, remove duplicate values, and return the sum of values', () => {
        expect(Solution(42)).toEqual(408);
    });
});