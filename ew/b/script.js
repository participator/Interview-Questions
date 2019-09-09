// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, L, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!areInputsInRange(U, L, C)) {
        return 'IMPOSSIBLE';
    }
    
    return deconstruction(U, L, C);
}

function areInputsInRange(Upper, Lower, C) {
    return isUpperAndLowerInRange(Upper, Lower)
        && isCInRange(C);
}

function isUpperAndLowerInRange(Upper, Lower) {
    return isInRange(Upper) 
        && isInRange(Lower);
}

function isInRange(rowValue) {
    return rowValue >= 0
        && rowValue <= 100000;
}

function isCInRange(C) {
    return C.every(element => element >= 0 && element <= 2);
}

function deconstruction(upper, lower, columnSum) {
    const length = columnSum.length;

    const array = columnSum.map(columnValue => {
        return calculateRowsValue(columnValue, upper, lower);
    })
    
}

function calculateRowsValue(columnValue, upper, lower) {
    let upperArray = [],
    lowerArray = [];

    if (columnValue === 2) {
        return 
    }
    else if columnValue === 0) {
        return upper   
    }
    else {
        
    }
}

