"use strict";
function summator(...elements) {
    let sum = 0;
    elements.forEach((element) => {
        sum += !isNaN(+element) ? +element : 0;
    });
    return sum;
}
console.log(summator('1', '2', 3));
console.log(summator('1', '2px', 3));
console.log(summator('1px', '2', 3));
console.log(summator('0', '2', 3));
console.log(summator(1, 2, 3));
