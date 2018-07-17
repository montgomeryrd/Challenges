'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should return the hexidecimal of input into the new cool mid-endian format of bytes', () => {
        expect(Solution(9999999)).toEqual('96987F');
    });

    it('should return the hexidecimal of input into the new cool mid-endian format of bytes', () => {
        expect(Solution(0)).toEqual('00');
    });

    it('should return the hexidecimal of input into the new cool mid-endian format of bytes', () => {
        expect(Solution(658188)).toEqual('0B0A0C');
    });

    it('should return the hexidecimal of input into the new cool mid-endian format of bytes', () => {
        expect(Solution(168496141)).toEqual('0D0B0A0C');
    });

    it('should return the hexidecimal of input into the new cool mid-endian format of bytes', () => {
        expect(Solution(43135012110)).toEqual('0D0B0A0C0E');
    });
});