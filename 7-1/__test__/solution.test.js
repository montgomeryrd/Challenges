'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should calculate the area and the perimeter given input dimensions', () => {
        expect(Solution(5, 2)).toEqual('Area: 31.4, perimeter: 23.1');
    });

    it('should calculate the area and the perimeter given input dimensions', () => {
        expect(Solution(2, 3)).toEqual('Area: 18.8, perimeter: 15.9');
    });

    it('should calculate the area and the perimeter given input dimensions', () => {
        expect(Solution(4, 2)).toEqual('Area: 25.1, perimeter: 19.4');
    });

    it('should calculate the area and the perimeter given input dimensions', () => {
        expect(Solution(7, 3)).toEqual('Area: 66.0, perimeter: 32.7');
    });

    it('should calculate the area and the perimeter given input dimensions', () => {
        expect(Solution(2, 1)).toEqual('Area: 6.3, perimeter: 9.7');
    });
});