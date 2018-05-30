'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    describe('Valid Input', () => {
        
        let arr = [1, 2];

        it('should return the josephus permutation of the array', () => {
            expect(Solution(arr, 1)).toEqual([2, 1]);
        });

        let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        it('should return the josephus permutation of the array', () => {
            expect(Solution(arr1, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });

        let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        it('should return the josephus permutation of the array', () => {
            expect(Solution(arr2, 2)).toEqual([2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
        });

        let arr3 = ["C", "o", "d", "e", "W", "a", "r", "s"];

        it('should return the josephus permutation of the array', () => {
            expect(Solution(arr3, 4)).toEqual(['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
        });

        let arr4 = [];

        it('should return the josephus permutation of the array', () => {
            expect(Solution(arr4, 3)).toEqual([]);
        });
    });
});