type NumberAndString = number | string;

function summator(...elements: NumberAndString[]): number {
    let sum: number = 0;
    elements.forEach((element: NumberAndString) => {
        sum += !isNaN(+element) ? +element : 0;
    });

    return sum;
}

console.log(summator('1', '2', 3));
console.log(summator('1', '2px', 3));
console.log(summator('1px', '2', 3));
console.log(summator('0', '2', 3));
console.log(summator(1, 2, 3));