function summator(...elements: (number | string)[]): number {
    let sum: number = 0;
    elements.forEach((element: (number | string)) => {
        sum += !isNaN(+element) ? +element : 0;
    });

    return sum;
}

console.log(summator('1', '2', 3));
console.log(summator('1', '2px', 3));
console.log(summator('1px', '2', 3));
console.log(summator('0', '2', 3));
console.log(summator(1, 2, 3));