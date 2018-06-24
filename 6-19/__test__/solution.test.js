'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let string1 = 'man i need a taxi up to ubud';

    it('should split the string, flip each word inside out, and return the altered string.', () => {
        expect(Solution(string1)).toEqual('man i ende a atix up to budu');
    });

    let string2 = 'what time are we climbing up the volcano';

    it('should split the string, flip each word inside out, and return the altered string.', () => {
        expect(Solution(string2)).toEqual('hwta item are we milcgnib up the lovcona');
    });

    let string3 = 'take me to semynak';

    it('should split the string, flip each word inside out, and return the altered string.', () => {
        expect(Solution(string3)).toEqual('atek me to mesykan');
    });

    let string4 = 'I miscounted the men, Liz';

    it('should split the string, flip each word inside out, and return the altered string.', () => {
        expect(Solution(string4)).toEqual('I ocsimdetnu the em,n Liz');
    });

    let string5 = 'This paint is drying weird and these strings are all inside out';

    it('should split the string, flip each word inside out, and return the altered string.', () => {
        expect(Solution(string5)).toEqual('hTsi apitn is yrdgni ewidr and htees rtsisgn are all sniedi out');
    });
});