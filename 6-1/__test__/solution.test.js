'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    let a = 13, b = -12;

    it('should calculate the sum without using + or - operands', () => {
        expect(Solution(a, b)).toEqual(1);
    });

    let c = -6, d = -14;

    it('should calculate the sum without using + or - operands', () => {
        expect(Solution(c, d)).toEqual(-20);
    });

    let e = 6, f = 5;

    it('should calculate the sum without using + or - operands', () => {
        expect(Solution(e, f)).toEqual(11);
    });

    let g = 135233, h = -3312;

    it('should calculate the sum without using + or - operands', () => {
        expect(Solution(g, h)).toEqual(131921);
    });

    let i = -3, j = 12;

    it('should calculate the sum without using + or - operands', () => {
        expect(Solution(i, j)).toEqual(9);
    });
});