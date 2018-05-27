'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    describe('Valid Input', () => {
        
        let arr1 = [2, -5, 7, 4, 9, 0], n1 = 3;

        it(`should sort array and return the ${n1}rd smallest integer`, () => {
            expect(Solution(arr1, n1)).toEqual(2);
        });

        let arr2 = [2, 2, 2, 4, 5, 7, 7, 9], n2 = 3;

        it(`should sort array, filter out duplicate values, and return the ${n2}rd smallest integer`, () => {
            expect(Solution(arr2, n2)).toEqual(5);
        });

        let arr3 = [2, 6, 2, 10, 2, 4, 80, 5, 7, 16, 7, 9], n3 = 6;

        it(`should sort array, filter out duplicate values, and return the ${n3}th smallest integer`, () => {
            expect(Solution(arr3, n3)).toEqual(9);
        });

        let arr4 = [5, 1, 94, 24, 77, 24], n4 = 20;

        it(`should sort array, filter out duplicate values, but return null because the ${n4}th position in the array does not exist`, () => {
            expect(Solution(arr4, n4)).toBeNull();
        });

        let arr5 = [765, 2746, 7538, 521, 58258, 765, 64347, 6479387, 352656, 58258], n5 = 4;

        it(`should sort array, filter out duplicate values, and return the ${n5}th smallest integer`, () => {
            expect(Solution(arr5, n5)).toEqual(7538);
        });
    });
});