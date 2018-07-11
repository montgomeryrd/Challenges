'use strict';

module.exports = function covfefe(str){
  return (/coverage/.test(str)) ? str.replace(/coverage/g, 'covfefe') : `${str} covfefe`;
}