'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {
    
    let arr1 = [1, 2, 2, 2, 3], arr2 = [2];

    it('should remove the elements of the second list from the first list', () => {
        expect(Solution(arr1, arr2)).toEqual([1, 3]);
    });

    let arr3 = [1, '2', 2, 2, 3, 'sandwich'], arr4 = [2, 'sandwich'];

    it('should remove the elements of the second list from the first list', () => {
        expect(Solution(arr3, arr4)).toEqual([1, '2', 3]);
    });

    let arr5 = ['Joe', 'Rogan', 'Standup', 'Experience'], arr6 = ['Standup'];

    it('should remove the elements of the second list from the first list', () => {
        expect(Solution(arr5, arr6)).toEqual(['Joe', 'Rogan', 'Experience']);
    });

    let arr7 = [1, '1', 24, 75, 75, 224, '35'], arr8 = [24, 224, 1];

    it('should remove the elements of the second list from the first list', () => {
        expect(Solution(arr7, arr8)).toEqual(['1', 75, 75, '35']);
    });

    let arr9 = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10], arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 10];

    it('should remove the elements of the second list from the first list', () => {
        expect(Solution(arr9, arr10)).toEqual([9]);
    });
});