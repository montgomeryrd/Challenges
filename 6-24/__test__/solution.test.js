'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let iso1 = 'Dermatoglyphics';

    it('should return true if string is an isogram else return false', () => {
        expect(Solution(iso1)).toBe(true);
    });

    let iso2 = 'isogram';

    it('should return true if string is an isogram else return false', () => {
        expect(Solution(iso2)).toBe(true);
    });

    let iso3 = 'abba';

    it('should return true if string is an isogram else return false', () => {
        expect(Solution(iso3)).toBe(false);
    });

    let iso4 = 'moOse';

    it('should return true if string is an isogram else return false', () => {
        expect(Solution(iso4)).toBe(false);
    });

    let iso5 = 'hello world';

    it('should return true if string is an isogram else return false', () => {
        expect(Solution(iso5)).toBe(false);
    });
});