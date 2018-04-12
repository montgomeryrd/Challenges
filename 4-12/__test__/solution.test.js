'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let str1 = 'We choose to go to the moon and do the other thing, not because they are easy, but because they are hard.';
    let str2 = 'There comes a time when the operation of the machine becomes so odious, makes you sick at heart.';
    let str3 = 'You didn\'t belive in me, but I believed in myself just like the end of ALL movies';
    let str4 = 'Mississippi Pizzza Xerox Pandamonium Nephalem Saggitarius'

    describe('Valid Input', () => {
        
        it('should return the highest scoring word', () => {
            expect(Solution(str1)).toEqual('other');
        });

        it('should return the highest scoring word', () => {
            expect(Solution(str2)).toEqual('operation');
        });

        it('should return the highest scoring word', () => {
            expect(Solution(str3)).toEqual('movies');
        });

        it('should return the highest scoring word', () => {
            expect(Solution(str4)).toEqual('Mississippi');
        });
    });
});