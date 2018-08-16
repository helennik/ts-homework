"use strict";
function isInArray(array, ...elements) {
    return elements.every((element) => array.indexOf(element) !== -1);
}
console.log(isInArray([1, 2], 2, 1));
console.log(isInArray([1, 2], 2, 1, 3));
console.log(isInArray([1, 2]));
console.log(isInArray([], 2, 1));
