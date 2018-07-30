'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should check an array of integers and return whether the order of integers are ascending, descending, or not in order', () => {
        expect(Solution([1, 2])).toEqual('yes, ascending');
    });

    it('should check an array of integers and return whether the order of integers are ascending, descending, or not in order', () => {
        expect(Solution([15, 7, 3, -8])).toEqual('yes, descending');
    });

    it('should check an array of integers and return whether the order of integers are ascending, descending, or not in order', () => {
        expect(Solution([4, 2, 30])).toEqual('no');
    });
});