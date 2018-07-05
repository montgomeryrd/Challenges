'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let arr1 = [3,2,6,8,2,3];

    it('should sort the array from the highest values to the lowest, filter out duplicates, and return the greatest triplet sum', () => {
        expect(Solution(arr1)).toEqual(17);
    });

    let arr2 = [2,9,13,10,5,2,9,5];

    it('should sort the array from the highest values to the lowest, filter out duplicates, and return the greatest triplet sum', () => {
        expect(Solution(arr2)).toEqual(32);
    });

    let arr3 = [2,1,8,0,6,4,8,6,2,4];

    it('should sort the array from the highest values to the lowest, filter out duplicates, and return the greatest triplet sum', () => {
        expect(Solution(arr3)).toEqual(18);
    });

    let arr4 = [-3,-27,-4,-2,-27,-2];

    it('should sort the array from the highest values to the lowest, filter out duplicates, and return the greatest triplet sum', () => {
        expect(Solution(arr4)).toEqual(-9);
    });

    let arr5 = [-14,-12,-7,-42,-809,-14,-12];

    it('should sort the array from the highest values to the lowest, filter out duplicates, and return the greatest triplet sum', () => {
        expect(Solution(arr5)).toEqual(-33);
    });
});