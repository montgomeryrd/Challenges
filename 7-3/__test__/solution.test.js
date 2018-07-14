'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should compare two strings to see if they are isomorphic to one another', () => {
        expect(Solution('ESTATE', 'DUELED')).toEqual(true);
    });

    it('should compare two strings to see if they are isomorphic to one another', () => {
        expect(Solution('POTLUCK', 'BONDAGE')).toEqual(true);
    });

    it('should compare two strings to see if they are isomorphic to one another', () => {
        expect(Solution('PORNOGRAPHY', 'CATHOLICISM')).toEqual(false);
    });

    it('should compare two strings to see if they are isomorphic to one another', () => {
        expect(Solution('BANANAS', 'HAMMOCK')).toEqual(false);
    });

    it('should compare two strings to see if they are isomorphic to one another', () => {
        expect(Solution('AMERICA', 'ACIREMA')).toEqual(true);
    });
});