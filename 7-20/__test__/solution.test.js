'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should convert hash to a sorted array', () => {
        expect(Solution({name: "Jeremy"})).toEqual([["name", "Jeremy"]]);
    });

    it('should convert hash to a sorted array', () => {
        expect(Solution({name: "Jeremy", age: 24})).toEqual([["age", 24], ["name", "Jeremy"]]);
    });

    it('should convert hash to a sorted array', () => {
        expect(Solution({name: "Jeremy", age: 24, role: "Software Engineer"})).toEqual([["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
    });

    it('should convert hash to a sorted array', () => {
        expect(Solution({product: "CodeWars", powerLevelOver: 9000})).toEqual([["powerLevelOver", 9000], ["product", "CodeWars"]]);
    });

    it('should convert hash to a sorted array', () => {
        expect(Solution({})).toEqual([]);
    });
});