'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let arr1 = [2, 7, 35, 0, 5, 0, 422, 0]; //standard
    
    it('should filter through the array twice creating two arrays, one without zeros and one with zeros, and then concatenate them', () => {
        expect(Solution(arr1)).toEqual([2, 7, 35, 5, 422, 0, 0, 0]);
    });
    
    let arr2 = ['Sandwich', 0, 'Bravo', 0, 'Yiddish', 422, 0]; //with strings
    
    it('should filter through the array twice creating two arrays, one without zeros and one with zeros, and then concatenate them', () => {
        expect(Solution(arr2)).toEqual(['Sandwich', 'Bravo', 'Yiddish', 422, 0, 0, 0]);
    });
    
    let arr3 = [0, 0, 0, 0, 0, 0, 422, 0]; //mostly 0's
    
    it('should filter through the array twice creating two arrays, one without zeros and one with zeros, and then concatenate them', () => {
        expect(Solution(arr3)).toEqual([422, 0, 0, 0, 0, 0, 0, 0]);
    });
    
    let arr4 = [2, 7, 35, 5, 422]; // no 0's
    
    it('should filter through the array twice creating two arrays, one without zeros and one with zeros, and then concatenate them', () => {
        expect(Solution(arr4)).toEqual([2, 7, 35, 5, 422]);
    });
    
    let arr5 = [7, 2, 0, 84, 26, 0, 26, 90, 14]; //a fifth example

    it('should filter through the array twice creating two arrays, one without zeros and one with zeros, and then concatenate them', () => {
        expect(Solution(arr5)).toEqual([7, 2, 84, 26, 26, 90, 14, 0, 0]);
    });
});