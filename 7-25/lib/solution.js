'use strict';

module.exports = function  closest(strng) {
  if(strng === '') return [];
  
  let array = strng.split(' ').map(e => !e ? e : String(e).split('').reduce((a, b) => parseInt(a) + parseInt(b)));
  let sortedarray = strng.split(' ').map(e => !e ? e : String(e).split('').reduce((a, b) => parseInt(a) + parseInt(b))).sort((a,b) => a - b);

  let smallest = [], count = 1000000;
  
  for(let i = 0 ; i < sortedarray.length ; i++) {
    if(sortedarray[i] === sortedarray[i+1]) {
      smallest = [sortedarray[i], sortedarray[i+1]];
      break;
    } else if(sortedarray[i+1] - sortedarray[i] < count) {
      count = sortedarray[i+1] - sortedarray[i];
      smallest = [sortedarray[i], sortedarray[i+1]];
    }
  }
  
  let location = array.indexOf(smallest[0]), locations = [array.indexOf(smallest[0])], origin = [strng.split(' ')[locations[0]]];
  array.splice(location, 1, '');
  locations.push(array.indexOf(smallest[1]));
  origin.push(strng.split(' ')[locations[1]]);
  
  return [[smallest[0], locations[0], Number(origin[0])], [smallest[1], locations[1], Number(origin[1])]];
}