'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let n1 = 16

    it('should "find the digital root" by splitting multi digit numbers and summing their value until they are a single digit value', () =>{
        expect(Solution(n1)).toEqual(7);
    });

    let n2 = 123

    it('should "find the digital root" by splitting multi digit numbers and summing their value until they are a single digit value', () =>{
        expect(Solution(n2)).toEqual(6);
    });

    let n3 = 9786

    it('should "find the digital root" by splitting multi digit numbers and summing their value until they are a single digit value', () =>{
        expect(Solution(n3)).toEqual(3);
    });

    let n4 = 16372546

    it('should "find the digital root" by splitting multi digit numbers and summing their value until they are a single digit value', () =>{
        expect(Solution(n4)).toEqual(7);
    });

    let n5 = 1647856354

    it('should "find the digital root" by splitting multi digit numbers and summing their value until they are a single digit value', () =>{
        expect(Solution(n5)).toEqual(4);
    });
});