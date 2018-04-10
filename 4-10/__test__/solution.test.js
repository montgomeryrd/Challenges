'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    describe('Valid Input', () => {
        
        let s1 = 'Chiann';
        let s2 = 'C9h9i9ann';

        it('should return a 9 as a string', () => {
            expect(Solution(s1, s2)).toEqual('9');
        });

        let s3 = 'Hello World!';
        let s4 = 'Helllo Wollrlld!';

        it('should return the letter l', () => {
            expect(Solution(s3, s4)).toEqual('l');
        });

        let s5 = 'I need to shave.';
        let s6 = '$$I n$$eed$ to $$s$h$$$av$e.$';

        it('should return a $ sign', () => {
            expect(Solution(s5, s6)).toEqual('$');
        });
    });
});