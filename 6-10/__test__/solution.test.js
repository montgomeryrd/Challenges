'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let word1 = 'codewars', word2 = 'hackerrank';

    it('should return the letters of whatever the opposite of anagram is', () => {
        expect(Solution(word1, word2)).toEqual(10);
    });

    let word3 = 'repository', word4 = 'directory';

    it('should return the letters of whatever the opposite of anagram is', () => {
        expect(Solution(word3, word4)).toEqual(5);
    });

    let word5 = 'microsoft', word6 = 'apple';

    it('should return the letters of whatever the opposite of anagram is', () => {
        expect(Solution(word5, word6)).toEqual(14);
    });

    let word7 = 'sandwich', word8 = 'wristwatch';

    it('should return the letters of whatever the opposite of anagram is', () => {
        expect(Solution(word7, word8)).toEqual(6);
    });

    let word9 = 'ACRES', word10 = 'RACES';

    it('should return the letters of whatever the opposite of anagram is', () => {
        expect(Solution(word9, word10)).toEqual(0);
    });
});