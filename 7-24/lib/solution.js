'use strict';

module.exports = function toPretty(seconds){
  if (seconds < 1) return 'just now';
  else {
    let answer, unit = [[604800, 'week'], [86400, 'day'], [3600, 'hour'], [60, 'minute'], [1, 'second']];
    for (let i = 0; i < unit.length; i++) {
      if (seconds >= unit[i][0]) {
        let time = Math.floor(seconds / unit[i][0]);
        answer = (time == 1 ? (unit[i][1] == 'hour' ? 'an' : 'a') : time) + ' ' + unit[i][1] + (time == 1 ? '' : 's') + ' ago';
        return answer;
      }
    }
  }
}