'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should create a coded cypher message using a message and a cypher key', () => {
        expect(Solution('scout', 1939)).toEqual([ 20, 12, 18, 30, 21 ]);
    });

    it('should create a coded cypher message using a message and a cypher key', () => {
        expect(Solution('masterpiece', 1939)).toEqual([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8 ]);
    });

    it('should create a coded cypher message using a message and a cypher key', () => {
        expect(Solution('glybtwtjhgv', 2)).toEqual([ 9, 14, 27, 4, 22, 25, 22, 12, 10, 9, 24 ]);
    });

    it('should create a coded cypher message using a message and a cypher key', () => {
        expect(Solution('ssvvsxaigt', 125)).toEqual([ 20, 21, 27, 23, 21, 29, 2, 11, 12, 21 ]);
    });

    it('should create a coded cypher message using a message and a cypher key', () => {
        expect(Solution('rjzitwtcknszihcfidczy', 248)).toEqual([ 20, 14, 34, 11, 24, 31, 22, 7, 19, 16, 23, 34, 11, 12, 11, 8, 13, 12, 5, 30, 33 ]);
    });
});