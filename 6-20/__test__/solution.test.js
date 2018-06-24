'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let happy1 = [':)' , ':o)' , ';-)' , ';~)' , ':)' , ';)' , ';)'];

    it('should count all the variations of allowed smiley faces', () => {
        expect(Solution(happy1)).toEqual(6);
    });

    let happy2 = [';D' , ';~)' , ':)' , ':(' , ':>' , ':>' , ';~>'];

    it('should count all the variations of allowed smiley faces', () => {
        expect(Solution(happy2)).toEqual(3);
    });

    let happy3 = [':o>' , ':~(' , ':~)' , ':o(' , ';)' , ':o(' , ';('];

    it('should count all the variations of allowed smiley faces', () => {
        expect(Solution(happy3)).toEqual(2);
    });

    let happy4 = [':~>' , ':->' , ';->' , ';o(' , ';>' , ';~)' , ':('];

    it('should count all the variations of allowed smiley faces', () => {
        expect(Solution(happy4)).toEqual(1);
    });

    let happy5 = [';(' , ';>' , ';>' , ';o>' , ';D' , ';oD' , ';D'];

    it('should count all the variations of allowed smiley faces', () => {
        expect(Solution(happy5)).toEqual(2);
    });
});