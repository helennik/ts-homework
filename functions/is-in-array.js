"use strict";
function isInArray(array) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    return elements.every(function (element) {
        return !!~array.indexOf(element);
    });
}
console.log(isInArray([1, 2], 2, 1));
console.log(isInArray([1, 2], 2, 1, 3));
console.log(isInArray([1, 2]));
console.log(isInArray([], 2, 1));
