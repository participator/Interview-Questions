describe('Validate Using Stack', function () {

    it('when three sets of brackets enclosing each other', function () {
        const input = '([{}])';
        const actual = validateUsingStack(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when three sets of brackets', function () {
        const input = '()[]{}';
        const actual = validateUsingStack(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when two brackets enclosing and separarte one set', function () {
        const input = '([]){}';
        const actual = validateUsingStack(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when invalid set of brackets', function () {
        const input = '([)]';
        const actual = validateUsingStack(input);
        const expected = false;
        expect(actual).toBe(expected);
    })

    describe('given string without brackets', function () {
        it('string is empty', function () {
            const input = '';
            const actual = validateUsingStack(input);
            const expected = true;
            expect(actual).toBe(expected);
        })
        it('string is includes no brackets', function () {
            const input = 'abjkdoo';
            const actual = validateUsingStack(input);
            const expected = true;
            expect(actual).toBe(expected);
        })
        it('string is includes 1 opened bracket', function () {
            const input = 'ad(dfa';
            const actual = validateUsingStack(input);
            const expected = false;
            expect(actual).toBe(expected);
        })
        it('string is includes 1 closed bracket', function () {
            const input = 'akd)';
            const actual = validateUsingStack(input);
            const expected = false;
            expect(actual).toBe(expected);
        })
    })
})

describe('Validate Using Recursion', function () {

    it('when three sets of brackets enclosing each other', function () {
        const input = '([{}])';
        const actual = validateUsingRecursion(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when three sets of brackets', function () {
        const input = '()[]{}';
        const actual = validateUsingRecursion(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when two brackets enclosing and separarte one set', function () {
        const input = '([]){}';
        const actual = validateUsingRecursion(input);
        const expected = true;
        expect(actual).toBe(expected);
    })

    it('when invalid set of brackets', function () {
        const input = '([)]';
        const actual = validateUsingRecursion(input);
        const expected = false;
        expect(actual).toBe(expected);
    })

    describe('given string without brackets', function () {
        it('string is empty', function () {
            const input = '';
            const actual = validateUsingRecursion(input);
            const expected = true;
            expect(actual).toBe(expected);
        })
        it('string is includes no brackets', function () {
            const input = 'abjkdoo';
            const actual = validateUsingRecursion(input);
            const expected = true;
            expect(actual).toBe(expected);
        })
        it('string is includes 1 opened bracket', function () {
            const input = 'ad(dfa';
            const actual = validateUsingRecursion(input);
            const expected = false;
            expect(actual).toBe(expected);
        })
        it('string is includes 1 closed bracket', function () {
            const input = 'akd)';
            const actual = validateUsingRecursion(input);
            const expected = false;
            expect(actual).toBe(expected);
        })
    })
})