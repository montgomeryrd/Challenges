'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let valid1 = [1, 1, 1, 1];
    let valid2 = [1, 3, -2, 1];
    let valid3 = [1, -1];
    
    describe('Valid Input', () => {
        it('should return 4 jumps', () => {
            expect(Solution(valid1)).toEqual(4);
        });

        it('should return 2 jumps', () => {
            expect(Solution(valid2)).toEqual(2);
        });

        it('should return -1 because based on the input, the frog is unable to jump out of the array', () => {
            expect(Solution(valid3)).toEqual(-1);
        });
    });
});