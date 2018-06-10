'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let letters1 = 'abc';

    it('should return the string as an array with pairs of letters', () => {
        expect(Solution(letters1)).toEqual(['ab', 'c_']);
    });

    let letters2 = 'abcd';

    it('should return the string as an array with pairs of letters', () => {
        expect(Solution(letters2)).toEqual(['ab', 'cd']);
    });

    let letters3 = 'abcdefghijklm';

    it('should return the string as an array with pairs of letters', () => {
        expect(Solution(letters3)).toEqual(['ab', 'cd', 'ef', 'gh', 'ij', 'kl', 'm_']);
    });

    let letters4 = 'abcdefghijklmnopqrstuvwxyz'

    it('should return the string as an array with pairs of letters', () => {
        expect(Solution(letters4)).toEqual(['ab', 'cd', 'ef', 'gh', 'ij', 'kl', 'mn', 'op', 'qr', 'st', 'uv', 'wx', 'yz']);
    });
});