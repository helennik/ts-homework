function getUnique<T>(...elements: T[]): T[] {
    const map: Map<T, number> = new Map();
    const result: T[] = [];

    elements.forEach((element: T) => {
        map.set(element, 1);
    });

    for (const element of map.keys()) {
        result.push(element);
    }

    return result;
}

interface Interface {
    name: string;
}

const obj: Interface = {
    name: 'name'
};
const arr: number[] = [];

console.log(getUnique(1, 1, 2));
console.log(getUnique(obj, obj));
console.log(getUnique(arr, arr));
console.log(getUnique('1', '1', '2'));
console.log(getUnique(1, 1, 2, NaN));