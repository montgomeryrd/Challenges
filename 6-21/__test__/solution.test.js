'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let arr1 = [2, 2, 2, 0];

    it('merge duplicate values only once and return values in descending order', () => {
        expect(Solution(arr1)).toEqual([4, 2, 0, 0]);
    });

    let arr2 = [4, 2, 2, 0];

    it('merge duplicate values only once and return values in descending order', () => {
        expect(Solution(arr2)).toEqual([4, 4, 0, 0]);
    });

    let arr3 = [2, 2, 2, 0];

    it('merge duplicate values only once and return values in descending order', () => {
        expect(Solution(arr3)).toEqual([4, 2, 0, 0]);
    });

    let arr4 = [2, 2, 0, 0];

    it('merge duplicate values only once and return values in descending order', () => {
        expect(Solution(arr4)).toEqual([4, 0, 0, 0]);
    });

    let arr5 = [2, 2, 2, 2, 2];

    it('merge duplicate values only once and return values in descending order', () => {
        expect(Solution(arr5)).toEqual([4, 4, 2, 0, 0]);
    });
});