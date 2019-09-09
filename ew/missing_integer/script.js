// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let arr = [];
    // write your code in JavaScript (Node.js 8.9.4)
    if (!areAllItemsNumbers(A) && !areSomeItemNumbers(A) 
    || areSomeOutOfRange(A)) {
        return 1;
    }
    else if (!areAllItemsNumbers(A) && areSomeItemNumbers(A)) {
        arr = removeNonNumberItems(A);
    }
    
    const smallestPositiveInteger = arr.length > 0 ? getSmallestPositiveInteger(arr) : getSmallestPositiveInteger(A);
    
    return smallestPositiveInteger || 1;
}

function areAllItemsNumbers(arr) {
    return arr.every(item => typeof item === 'number');
}

function areSomeItemsNumbers(arr) {
    return arr.some(item => typeof item === 'number');
}

function areSomeOutOfRange(arr) {
    return arr.every(item => item < -100000 || item > 100000);
}

function removeNonNumberItems(arr) {
    return arr.filter(item => typeof item === 'number');
}

function getSmallestPositiveInteger(arr) {
    let sorted = sortIntegerArray(arr);
    let noRepeats = removeDuplicates(sorted);
    noRepeats.unshift(0);
    
    let index;
    for (index=0; index < noRepeats.length; index++) {
        if (noRepeats[index] !== index && index !== 0)
        return index;
    }
    
    return index;
}

function sortIntegerArray(arr) {
    return [...arr].sort((a,b) => {
        if (a < b) {
            return -1;
        }
        if ( a > b) {
            return 1;
        }
    })
}

function removeDuplicates(arr) {
    return [...arr].filter((item,index, arr) => {
        if (arr[index+1]) {
            return item !== arr[index+1];
        }
        return true;
    });
}