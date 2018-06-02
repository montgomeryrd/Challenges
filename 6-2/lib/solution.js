'use strict';

module.exports = function array_diff(a, b) {
    return a.filter(ele => !b.includes(ele));
}