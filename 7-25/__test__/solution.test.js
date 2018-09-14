'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("")).toEqual([]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("456899 50 11992 176 272293 163 389128 96 290193 85 52")).toEqual([[13, 9, 85], [14, 3, 176]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("239382 162 254765 182 485944 134 468751 62 49780 108 54")).toEqual([[8, 5, 134], [8, 7, 62]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("241259 154 155206 194 180502 147 300751 200 406683 37 57")).toEqual([[10, 1, 154], [10, 9, 37]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("89998 187 126159 175 338292 89 39962 145 394230 167 1")).toEqual([[13, 3, 175], [14, 9, 167]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("462835 148 467467 128 183193 139 220167 116 263183 41 52")).toEqual([[13, 1, 148], [13, 5, 139]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("403749 18 278325 97 304194 119 58359 165 144403 128 38")).toEqual([[11, 5, 119], [11, 9, 128]]);
    });
    
    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("28706 196 419018 130 49183 124 421208 174 404307 60 24")).toEqual([[6, 9, 60], [6, 10, 24]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("189437 110 263080 175 55764 13 257647 53 486111 27 66")).toEqual([[8, 7, 53], [9, 9, 27]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("79257 160 44641 146 386224 147 313622 117 259947 155 58")).toEqual([[11, 3, 146], [11, 9, 155]]);
    });

    it('should sum the individual numbers in the string by their digits and return the smallest and closest pair of numbers including their position in the string and the original number', () => {
        expect(Solution("315411 165 53195 87 318638 107 416122 121 375312 193 59")).toEqual([[15, 0, 315411], [15, 3, 87]]);
    });
});