'use strict';

module.exports = function sortedCommByDigs(arr1, arr2) {
	// Filters through each array, returns shared values, and removes duplicates
  let arr = arr1.filter(function(val) {
    return arr2.indexOf(val) != -1;
  }).filter((x, i, a) => a.indexOf(x) === i);

	// calculates the "digital root"
  let dr = [];  
  for(let i = 0 ; i < arr.length ; i++) {
    dr.push((arr[i].toString().split('')).map(a => parseInt(a)).reduce((a, b) => a + b));
  }
	
	// calculates the "deeper square double digit root"
  let dsddr = [];
  for(let i = 0 ; i < dr.length ; i++) {
    dsddr.push((dr[i].toString().split('')).map(a => Math.pow(parseInt(a), 2)).reduce((a, b) => a + b));
  }
	
	// one variable is the sum of the dr and dsddr together, second variable does the same and sorts it.
  // for some reason, I had to do it this way or else the variables were saved the same.
  let mapped = dr.map((x, i) => x + dsddr[i]);
  let sorted = dr.map((x, i) => x + dsddr[i]).sort((a, b) => b - a);
	
	// determines the order of the original arr composition based on the locations of the sorted values.
  let answer = [];
  for(let x = 0 ; x < sorted.length ; x++) {
    for(let y = 0 ; y < mapped.length ; y++) {
      if(mapped[y] === sorted[x]) {
        answer.push(arr[y]);
        mapped.splice(y, 1, '-');
      }
    }
  }
  return answer;
}