'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let str0 = '({[]}{(}{(}))}}';

    it('should return false for matching braces in a string', () => {
        expect(Solution(str0)).toBe(false);
    });

    let str1 = '({)}[]';

    it('should return true for matching braces in a string', () => {
        expect(Solution(str1)).toBe(true);
    });

    let str2 = '({[]})';

    it('should return true for matching braces in a string', () => {
        expect(Solution(str2)).toBe(true);
    });

    let str3 = '({}{[}((]))';

    it('should return false for matching braces in a string', () => {
        expect(Solution(str3)).toBe(false);
    });

    let str4 = '}{}}';

    it('should return false for matching braces in a string', () => {
        expect(Solution(str4)).toBe(false);
    });

    let str5 = '[(){}{';

    it('should return false for matching braces in a string', () => {
        expect(Solution(str5)).toBe(false);
    });

    let str6 = '(((({{{{[[[[}}}}]]]]))))';

    it('should return true for matching braces in a string', () => {
        expect(Solution(str6)).toBe(true);
    });
});