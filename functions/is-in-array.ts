function isInArray<T>(array: T[], ...elements: T[]): boolean {
    return elements.every((element: T) => array.indexOf(element) !== -1);
}


console.log(isInArray<number>([1, 2], 2, 1));
console.log(isInArray<number>([1, 2], 2, 1, 3));
console.log(isInArray<number>([1, 2]));
console.log(isInArray<number>([], 2, 1));