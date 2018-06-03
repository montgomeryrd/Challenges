'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let line1 = ['blue','blue','red','red','blue','green'];

    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line1)).toEqual(1);
    });

    let line2 = ['blue','red','blue','blue','red','blue','red'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line2)).toEqual(2);
    });

    let line3 = ['brown','brown','red','green'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line3)).toEqual(0);
    });

    let line4 = ['red','blue','blue','red'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line4)).toEqual(2);
    });
    
    let line5 = ['red','blue'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line5)).toEqual(0);
    });
    
    let line6 = ['blue','green','red','green','blue','blue','red'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line6)).toEqual(1);
    });
    
    let line7 = ['blue','blue','blue','blue','blue','blue','blue'];
    
    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line7)).toEqual(0);
    });
    
    let line8 = ['blue','red','blue','red','red','blue','red'];

    it('should check how many possible people wearing a red mask is your friend', () => {
        expect(Solution(line8)).toEqual(1);
    });
});