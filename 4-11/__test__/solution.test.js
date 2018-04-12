'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    describe('Invalid Input', () => {
        
        let n1 = 0;

        it('should return NaN', () => {
            expect(Solution(n1)).toEqual('NaN');
        });

        let n6 = 'pocket sandwich';

        it('should return NaN', () => {
            expect(Solution(n6)).toEqual('NaN');
        });
    });

    describe('Valid Input', () => {
        
        let n2 = 1;

        it('should return Champernowne\'s Digit: 0', () => {
            expect(Solution(n2)).toEqual(0);
        });

        let n3 = 20;

        it('should return Champernowne\'s Digit: 4', () => {
            expect(Solution(n3)).toEqual(4);
        });

        let n4 = 345;

        it('should return Champernowne\'s Digit: 5', () => {
            expect(Solution(n4)).toEqual(5);
        });

        let n5 = 45678;

        it('should return Champernowne\'s Digit: 3', () => {
            expect(Solution(n5)).toEqual(3);
        });
    });
});