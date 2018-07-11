'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let test1 = 'coverage';

    it('should return a string that resembles a dumbass\'s tweets', () => {
        expect(Solution(test1)).toEqual('covfefe');
    });

    let test2 = 'Grab em by the pussy';

    it('should return a string that resembles a dumbass\'s tweets', () => {
        expect(Solution(test2)).toEqual('Grab em by the pussy covfefe');
    });

    let test3 = 'Healthy young child goes to doctor, gets pumped with massive shot of many vaccines, doesn’t feel good and changes – AUTISM. Many such cases!';

    it('should return a string that resembles a dumbass\'s tweets', () => {
        expect(Solution(test3)).toEqual('Healthy young child goes to doctor, gets pumped with massive shot of many vaccines, doesn’t feel good and changes – AUTISM. Many such cases! covfefe');
    });

    let test4 = 'Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse';

    it('should return a string that resembles a dumbass\'s tweets', () => {
        expect(Solution(test4)).toEqual('Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse covfefe');
    });

    let test5 = 'Despite the negative press coverage';

    it('should return a string that resembles a dumbass\'s tweets', () => {
        expect(Solution(test5)).toEqual('Despite the negative press covfefe');
    });
});