"use strict";
function invert(str) {
    const arrStr = str.split('');
    const words = [];
    const invertWords = [];
    let wordArray = [];
    arrStr.forEach((e) => {
        if (e === ' ') {
            words.push(wordArray);
            words.push([' ']);
            wordArray = [];
        }
        else {
            wordArray.push(e);
        }
    });
    words.push(wordArray);
    words.forEach((word) => {
        const letters = [];
        word.forEach((letter) => {
            if (!!(letter).match(/[a-z]/i)) {
                letters.push(letter);
            }
        });
        invertWords.push(word.map((letter, key) => {
            if (!!(letter).match(/[a-z]/i)) {
                return letters.pop();
            }
            else {
                return letter;
            }
        }));
    });
    let resultStr = '';
    invertWords.forEach((word) => {
        resultStr += word.join('');
    });
    return resultStr;
}
console.log(invert('s1tar3t 2 hellow'), invert('s1tar3t 2 hellow') === 't1rat3s 2 wolleh');
console.log(invert('s1ta$%r3t 2 hel^low'), invert('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh');
console.log(invert('s1tar3t 2   low5'), invert('s1tar3t 2   low5') === 't1rat3s 2   wol5');
