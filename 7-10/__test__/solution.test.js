'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	var arr1 = [ 5, 56, 28, 35, 12, 27, 64, 99, 18, 31, 14, 6 ];
    var arr2 = [ 28, 17, 31, 63, 64, 5, 18, 17, 95, 56, 37, 5, 28, 16 ];
	
	it('should find shared values from each array, remove duplicates, find the (dr) and the (dsddr), add them, sort the array, and return the original shared array according to the sorted array', () => {
		expect(Solution(arr1, arr2)).toEqual([ 18, 5, 31, 56, 28, 64 ]);
	});

	var arr3 = [ 1, 2, 3, 4, 5, 6 ];
    var arr4 = [ 7, 8, 9, 10, 11, 12, 13, 14 ];
	
	it('should find shared values from each array, remove duplicates, find the (dr) and the (dsddr), add them, sort the array, and return the original shared array according to the sorted array', () => {
		expect(Solution(arr3, arr4)).toEqual([]);
	});

	var arr5 = [ 16, 15, 14, 13, 12 ];
	var arr6 = [ 9, 10, 11, 12 ];

	it('should find shared values from each array, remove duplicates, find the (dr) and the (dsddr), add them, sort the array, and return the original shared array according to the sorted array', () => {
		expect(Solution(arr5, arr6)).toEqual([12]);
	});

	var arr7 = [ 119, 200, 182, 148, 276, 107, 256, 111, 174, 18, 227, 133, 207, 28, 225, 220, 277, 96, 65, 144, 229, 139, 44, 172, 40, 136, 147, 294, 105, 210, 244, 247, 208, 142 ];
	var arr8 = [ 252, 292, 156, 176, 147, 241, 87, 97, 39, 256, 80, 118, 43, 222, 256, 84, 293, 219, 274, 280, 147, 83, 137, 286, 162, 148, 152, 172, 116, 254 ]

	it('should find shared values from each array, remove duplicates, find the (dr) and the (dsddr), add them, sort the array, and return the original shared array according to the sorted array', () => {
		expect(Solution(arr7, arr8)).toEqual([ 148, 256, 147, 172 ]);
	});
	
	var arr9 = [ 219, 194, 239, 288, 265, 248, 234, 35, 96, 225, 82, 220, 106, 137, 182, 113, 20, 287 ];
	var arr10 = [ 187, 281, 44, 38, 93, 249, 129, 249, 32 ];

	it('should find shared values from each array, remove duplicates, find the (dr) and the (dsddr), add them, sort the array, and return the original shared array according to the sorted array', () => {
		expect(Solution(arr9, arr10)).toEqual([]);
	});
});