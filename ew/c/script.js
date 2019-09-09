// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(AX, AY, BX, BY) {
    // write your code in JavaScript (Node.js 8.9.4)
    const coor = findXY(AX, AY, BX, BY);
    
    return `${coor.y}, ${coor.x}`;
}

function findXY(AX, AY, BX, BY) {
    let x = 0;
    let y = 0;
    
    if (AY === BY) {
        if ( AX > BX) {
            x = BX;
            y = BY + 1;
        }
        else if ( AX < BX ) {
            x = BX;
            y = BY - 1;
        }
        
    }
    else if (AY < BY) {
        if ( AX > BX ) {
            x = BX + 1;
            y = BY;
        }
        else if ( AX < BX) {
            x = BX -1;
            y = BY;
        }
    }
    else {
        if ( AX > BX ) {
            x = BX + 1;
            y = BY;
        }
        else if ( AX < BX) {
            x = BX -1;
            y = BY;
        }
    }
    
    return {
        x: x,
        y: y
    };
}