'use strict';

module.exports = function josephus(items, k){
    let acc = k;
    let temp = [];
    let array = [];
    
    if(items.length === 2) return [items[1], items[0]];
    
    while(items.length > 2) {
        for(let i = 0 ; i < items.length ; i = i) {
            if(i !== k - 1) {
                temp.push(items.shift());
                k = k - 1;
            } else {
                array.push(items[i]);
                items.splice(k - 1, 1)
                k = acc;
            }
        }
        items = temp;
    }
    return array.concat(items);
}

//Alternative, Better Method

// function josephus(items, k){
//     var result = [], index = 0;
//     while (items.length > 0){
//         index = (index + k - 1) % items.length;
//         result = result.concat(items.splice(index, 1));
//     }
//     return result;
// }