'use strict';

module.exports = function validBraces(braces){

    let validate = braces.split('');
    let index;

    while(validate.length > 0) {
        if(validate[0] === '(') {
            index = validate.findIndex(ele => ele === ')');
            if(index === -1) return false;
            validate.splice(index, 1);
            validate.shift();
        } else if(validate[0] === '[') {
            index = validate.findIndex(ele => ele === ']');
            if(index === -1) return false;
            validate.splice(index, 1);
            validate.shift();
        } else if(validate[0] === '{') {
            index = validate.findIndex(ele => ele === '}');
            if(index === -1) return false;
            validate.splice(index, 1);
            validate.shift();
        } else {
            return false;
        }
    }
    return true;
}


//Clever Solution

// function validBraces(braces){
//     while(braces.indexOf('{}') != -1 || braces.indexOf('()') != -1 || braces.indexOf('[]') != -1) {
//         braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
//     }
//     return braces.length == 0;
// }