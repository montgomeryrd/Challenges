'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(0)).toEqual('just now');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(1)).toEqual('a second ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(30)).toEqual('30 seconds ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(90)).toEqual('a minute ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(180)).toEqual('3 minutes ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(4000)).toEqual('an hour ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(40000)).toEqual('11 hours ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(140000)).toEqual('a day ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(400000)).toEqual('4 days ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(1000000)).toEqual('a week ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(10000000)).toEqual('16 weeks ago');
    });

    it('should calculate seconds into a "pretty" timestamp', () => {
        expect(Solution(31449600)).toEqual('52 weeks ago');
    });
});