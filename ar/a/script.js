function validateUsingStack(input) {
    if (input.length === 0 || /^[^\(\)\[\]{}]+$/.test(input)) return true;
    
    const stack = [];
    let result = true;
    const closers = ")]}";
    const closersToOpenersMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (var i = 0; i < input.length; i++) {
        const character = input[i];

        if (result === false) {
            return false;
        }
        else if (closers.includes(character)) {
            result = result && stack.pop() === closersToOpenersMap[character];
        }
        else {
            stack.push(character);
        }
    }

    return result && stack.length === 0;
}

function validateUsingRecursion(input) {
    if (input.length === 0 || /^[^\(\)\[\]{}]+$/.test(input)) return true;

    const closers = /[\)\]}]/;
    const inputMatchIndex = input.match(closers) !== null ? input.match(closers).index : null;

    if (!checkifMatch(input, inputMatchIndex)) return false;

    const newInput = removeMatchingBrackets(input, inputMatchIndex);

    return validateUsingRecursion(newInput);
}

function checkifMatch(input, closerIndex) {
    if (!closerIndex) return false;

    const closer = input[closerIndex];
    const opener = input[closerIndex - 1];

    const closersToOpenersMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    return opener === closersToOpenersMap[closer];
}

function removeMatchingBrackets(input, closerIndex) {
    const inputArr = input.split('');
    inputArr.splice(closerIndex - 1, 2);
    return inputArr.join('');
}