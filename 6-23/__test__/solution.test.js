'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let teams1 = [80];

    it('should alternate values to two different teams and then return the sum of each team', () => {
        expect(Solution(teams1)).toEqual([80, 0]);
    });

    let teams2 = [100,50];

    it('should alternate values to two different teams and then return the sum of each team', () => {
        expect(Solution(teams2)).toEqual([100, 50]);
    });

    let teams3 = [50,60,70,80];

    it('should alternate values to two different teams and then return the sum of each team', () => {
        expect(Solution(teams3)).toEqual([120, 140]);
    });

    let teams4 = [13,27,49];

    it('should alternate values to two different teams and then return the sum of each team', () => {
        expect(Solution(teams4)).toEqual([62, 27]);
    });

    let teams5 = [70,58,75,34,91];

    it('should alternate values to two different teams and then return the sum of each team', () => {
        expect(Solution(teams5)).toEqual([236, 92]);
    });
});