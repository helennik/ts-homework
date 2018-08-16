"use strict";
function getUnique(...elements) {
    const map = new Map();
    const result = [];
    elements.forEach((element) => {
        map.set(element, 1);
    });
    for (const element of map.keys()) {
        result.push(element);
    }
    return result;
}
const obj = {
    name: 'name'
};
const arr = [];
console.log(getUnique(1, 1, 2));
console.log(getUnique(obj, obj));
console.log(getUnique(arr, arr));
console.log(getUnique('1', '1', '2'));
console.log(getUnique(1, 1, 2, NaN));
