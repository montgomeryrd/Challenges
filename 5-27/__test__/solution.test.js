'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    describe('Valid Input', () => {
        
        let arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];

        it('should return 12 as the highest ranking number', () => {
            expect(Solution(arr1)).toEqual(12);
        });

        let arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];

        it('should return 12 as the highest ranking number', () => {
            expect(Solution(arr2)).toEqual(12);
        });

        let arr3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

        it('should return 3 as the highest ranking number', () => {
            expect(Solution(arr3)).toEqual(3);
        });
    });
});