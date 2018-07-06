'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let str1 = 'YCOLUE\'VREER';

    it('should return first all the even letters of the string and then all the odd letters of the string as a string', () => {
        expect(Solution(str1)).toEqual('YOU\'RE CLEVER');
    });

    let str2 = 'CodeWars';

    it('should return first all the even letters of the string and then all the odd letters of the string as a string', () => {
        expect(Solution(str2)).toEqual('CdWr oeas');
    });

    let str3 = 'disappointed';

    it('should return first all the even letters of the string and then all the odd letters of the string as a string', () => {
        expect(Solution(str3)).toEqual('dspone iapitd');
    });

    let str4 = 'hello world';

    it('should return first all the even letters of the string and then all the odd letters of the string as a string', () => {
        expect(Solution(str4)).toEqual('hlowrd el ol');
    });

    let str5 = 'poop';

    it('should return first all the even letters of the string and then all the odd letters of the string as a string', () => {
        expect(Solution(str5)).toEqual('po op');
    });
});
