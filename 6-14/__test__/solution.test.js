'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
        
    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(-1, 2)).toEqual(2);
    });
    
    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(13, 36)).toEqual(588);
    });
       
    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(-134, -4)).toEqual(-9039);
    });
    
    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(-19, 19)).toEqual(0);
    });
    
    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(31, 4268)).toEqual(9109581);
    });

    it('should find and sum all integers between and including values a and b', () => {
        expect(Solution(41, 14)).toEqual(770);
    });
});