'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should calculate whether the input integer is a prime number and return true if so', () => {
        expect(Solution(151)).toEqual(true);
    });

    it('should calculate whether the input integer is a prime number and return true if so', () => {
        expect(Solution(57)).toEqual(false);
    });

    it('should calculate whether the input integer is a prime number and return true if so', () => {
        expect(Solution(367)).toEqual(true);
    });

    it('should calculate whether the input integer is a prime number and return true if so', () => {
        expect(Solution(4)).toEqual(false);
    });

    it('should calculate whether the input integer is a prime number and return true if so', () => {
        expect(Solution(7)).toEqual(true);
    });
});