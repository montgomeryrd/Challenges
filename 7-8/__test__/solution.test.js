'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should emulate a wave by alternating capital letters through the letters in a string', () => {
        expect(Solution('hello')).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
    });

    it('should emulate a wave by alternating capital letters through the letters in a string', () => {
        expect(Solution('codewars')).toEqual(["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]);
    });

    it('should emulate a wave by alternating capital letters through the letters in a string', () => {
        expect(Solution('')).toEqual([]);
    });

    it('should emulate a wave by alternating capital letters through the letters in a string', () => {
        expect(Solution('two words')).toEqual(["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
    });

    it('should emulate a wave by alternating capital letters through the letters in a string', () => {
        expect(Solution(' gap ')).toEqual([" Gap ", " gAp ", " gaP "]);
    });
});