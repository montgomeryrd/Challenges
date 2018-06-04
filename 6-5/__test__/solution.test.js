'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let red = ['redbirdcrazy 6'];
    
    it('should abreviate the birds in the list to create a report of bird sightings and how many', () => {
        expect(Solution(red)).toEqual(['REDBIR', 6]);
    });

    let blue = ['blue 12'];
    
    it('should abreviate the birds in the list to create a report of bird sightings and how many', () => {
        expect(Solution(blue)).toEqual(['BLUE', 12]);
    });

    let green = ['green turkey 1'];
    
    it('should abreviate the birds in the list to create a report of bird sightings and how many', () => {
        expect(Solution(green)).toEqual(['GRETUR', 1]);
    });

    let purple = ['purplehead cracknose 13'];
    
    it('should abreviate the birds in the list to create a report of bird sightings and how many', () => {
        expect(Solution(purple)).toEqual(['PURCRA', 13]);
    });

    let rainbow = ['redbirdcrazy 6', 'blue 12', 'green turkey 1', 'purphead cracknose 13'];

    it('should abreviate the birds in the list to create a report of bird sightings and how many', () => {
        expect(Solution(rainbow)).toEqual(['REDBIR', 6, 'BLUE', 12, 'GRETUR', 1, 'PURCRA', 13]);
    });
});