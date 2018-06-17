'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let address1 = "http://github.com/carbonfive/raygun";

    it('should parse out and return just the domain name', () => {
        expect(Solution(address1)).toEqual('github');
    });

    let address2 = "https://www.cnet.com";

    it('should parse out and return just the domain name', () => {
        expect(Solution(address2)).toEqual('cnet');
    });

    let address3 = "www.reddit.com/r/earthporn";

    it('should parse out and return just the domain name', () => {
        expect(Solution(address3)).toEqual('reddit');
    });

    let address4 = "https://www.youtube.com/watch?v=zF2QwHnk3EE";

    it('should parse out and return just the domain name', () => {
        expect(Solution(address4)).toEqual('youtube');
    });

    let address5 = "https://www.yahoo.com/entertainment/michelle-wolf-trump-doesn-t-want-allies-anyone-182032840.html";

    it('should parse out and return just the domain name', () => {
        expect(Solution(address5)).toEqual('yahoo');
    });
});
